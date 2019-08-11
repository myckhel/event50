import React, {PureComponent} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  // Text,
  StatusBar,
} from 'react-native';

import { Text } from '../../components/theme'
import colors from '../../constants/Colors'

const Done = ({message}) => (
  <View style={styles.doneContainer}>
    {/*<i class="fa fa-check"></i>*/}
    <Text style={styles.messageText}>{message}</Text>
  </View>
)

class App extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      name: "Michael Ishola",
      attendance: {
        // event_edate: '2019-03-05',
      },
      event: {
        name: 'CS50 Lecture 2',
        edate: '2019-11-05',
        days: 2,
        hours: 3,
        mins: 4,
        secs: 5
      },
      refresh: null,
      event_id: null,
    }
  }

  componentDidMount(){
    let id = this.state.attendance.id
    this.counter(this.state.event.edate)
  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }

  Header = (props) => {
    return (
      <View style={styles.headerConatainer}>
        {/*<i style="fa fa-user-circle"></i>*/}
        <Text style={styles.headerText}>Hello!</Text>
        <Text style={styles.headerName}>{this.state.name}</Text>
      </View>
    )
  }

  Timer = (props) => {
    let id = props.id
    const { days, hours, mins, secs } = this.state.event
    function slicer(num){
      return ("0" + num).slice(-2)
    }
    return (
      <View style={styles.countdown} id="countdown">
        <Text style={styles.elapsed}>Time Left</Text>
        <View style={{marginBottom: 5}} />
          <View style={styles.timeContainer}>
            <View style={styles.interval}>
              <Text id={"day"+id} style={styles.timeText}>{days}</Text>
              <Text id="" style={styles.intervalText}>Days</Text>
            </View>
            <View style={styles.interval}>
              <Text id={"hour"+id} style={styles.timeText}>{hours}</Text>
              <Text id="" style={styles.intervalText}>Hrs</Text>
            </View>
            <View style={styles.interval}>
              <Text id={"min"+id} style={styles.timeText}>{mins}</Text>
              <Text id="" style={styles.intervalText}>Mins</Text>
            </View>
            <View style={styles.interval}>
              <Text id={"sec"+id} style={styles.timeText}>{secs}</Text>
              <Text id="" style={styles.intervalText}>Secs</Text>
            </View>
          </View>
      </View>
    )
  }

  Event = (props) => {
    return (
      <View style={styles.question}>
        <Text style={styles.questionText}>Will you attend the {this.state.event.name} on:</Text>
        <Text style={styles.eventTitle}>{this.state.event.edate}?</Text>
        <this.Timer />
      </View>
    )
  }

  Marker(props){
    let id = props.id
    return (
        <View style={styles.marker} id={"mark_form" + id} onSubmit={{}}>
          <TouchableOpacity
            style={styles.actionBtn}
            onClick={() => this.mark(event, 1,() => {this.state.refresh()})}
             id={"yes" + id}
             >
            {/*<i style="fa fa-thumbs-up"></i>*/}
            <Text style={styles.actionText} > Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionBtn}
            onClick={() => this.mark(event, 0,() => {this.state.refresh()})}
            id={"no" + id}
            >
            {/*<i style="fa fa-thumbs-down"></i>*/}
            <Text style={styles.actionText} > No</Text>
          </TouchableOpacity>
        </View>
    )
  }

  mark = (e,num,fn) => {
    console.log('mark');
    let id = this.state.attendance.id
    // $('#attendance_input' + id).val(num);
    // swal({
    //       title: "Are you sure?",
    //       text: "After success wait till the next event",
    //       type: "warning",
    //       buttons: true,
    //       dangerMode: true,
    //       showCancelButton: true,
    //     },function(){
    //     var values = {};
    //     $.each($('#mark_form' + id).serializeArray(), function(i, field) {
    //       values[field.name] = field.value;
    //     });
    //     //disble buttons
    //     $('#yes' + id).prop('disabled', true);
    //     $('#no' + id).prop('disabled', true);
    //     //process the form
    //     $.ajax({
    //         type: 'POST', url: "{{route('mark')}}", data: values, dataType: 'json', encode: true
    //     }).done(function(response){
    //       if(response.status){
    //         swal("Success!", "Attendance Marked Successfully", "success");
    //         fn()
    //       }else{
    //         if(response.e){
    //           console.log(response.e);
    //           swal("Oops", "Error occured! Error: "+response.e, "error");
    //           fn()
    //         }else{
    //           swal("Oops", ""+response.reason, "error");
    //           fn()
    //         }
    //       }
    //     });
    //   });
  }

  counter = (date) => {
    var countDownDate = new Date(date).getTime();
    //
    let id = this.state.attendance.id
    // Update the count down every 1 second
    let x = setInterval(() => {
      // Get todays date and time
      var now = new Date().getTime();
      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Output the result"
      // console.log(days);
      this.setState(prev => ({
        event: {...prev.event,
          days: ("0" + days).slice(-2),
          hours: ("0" + hours).slice(-2),
          mins: ("0" + minutes).slice(-2),
          secs: ("0" + seconds).slice(-2),
        }
      }))
      // If the count down is over, hide the event
      if (distance < 0) {
        clearInterval(this.state.x);
        // $('#question').hide();
      }
    }, 1000);
    this.intervalId = x
  }

  NoAttendnace = () => (
    <View style={styles.noAttendance}>
        <View style={{}}>
            <Text>No Attendance Yet</Text>
            <Text>Check back later</Text>
        </View>
        <View style={{}}>
            <Text style={{}}>
                {"{{NOW()}}" }<Text> </Text> {/*<i style="icofont icofont-caret-down text-danger"></i>*/}
            </Text>
        </View>
    </View>
  )

  render(){
    const { event_edate } = this.state.attendance
    const { name } = this.state
    console.log(this.state);
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.container}>
          {this.state.message && (<Done message="done" />)}
          <ScrollView>
            <View style={styles.eventContainer}>
              <this.Header />
              <this.Event />
              <this.Marker id={this.state.attendance.id} />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    );
  };
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageText: {

  },
  doneContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    width: '50%',
    height: 100,
  },
  headerConatainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {

  },
  headerName: {

  },
  elapsed: {

  },
  countdown: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  interval: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  eventContainer: {
  },
  question: {
    justifyContent: 'center',
    alignItems: 'center',
      padding: 80,
      backgroundColor: 'rgba(0,0,0,0.1)'

  },
  marker: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  actionBtn: {
    // height: 19,
    backgroundColor: colors.tintColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  noAttendance: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
