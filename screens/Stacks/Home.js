import React, {PureComponent} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  // Text,
  StatusBar,
} from 'react-native';

import { Text, Loader } from '../../components/theme'
import colors from '../../constants/Colors'

import pending from '../../func/async/event'

import Event from '../../components/event'

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
      events: [
        {
          name: 'CS50 Lecture 2',
          edate: '2019-11-05',
        }
      ],
      loading: true,
      name: "Michael Ishola",
    }
  }

  static options = {
    title: '50 Event'
  }

  componentDidMount = () => {
    this.toggleLoading()
    this.init()
  }

  init = async () => {
    console.log('dd');
    try {
      const res = await pending()
      if (res.status) {

      } else {

      }
      console.log(res);
    } catch (e) {
      console.log({e});
    } finally {

    }
  }

  Header = (props) => {
    return (
      <View style={styles.headerConatainer}>
        {/*<i style="fa fa-user-circle"></i>*/}
        <Text style={styles.headerText}>Hello! {" "}</Text>
        <Text style={[styles.headerText, styles.headerName]}>{this.state.name}</Text>
      </View>
    )
  }

  mark = (e,num,fn) => {
    console.log('mark');
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

  toggleLoading = () => {
    this.setState( prev => ({loading: !prev.loading}))
  }

  render(){
    const { name, events } = this.state
    // console.log(this.state);
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.container}>
        <this.Header />
        {this.state.loading && (
          <Loader />
        )}
        {this.state.message && (<Done message="done" />)}
        {events.map((event, i) => (
          <Event key={i} event={event} />
        ))}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingHorizontal: 30,
    marginVertical: 10,
    backgroundColor: colors.dark,
    borderRadius: 10
  },
  headerText: {
    color: colors.white,
    fontSize: 20,
    fontFamily: 'SpaceMono-Regular',
    textShadowRadius: 5,
    textShadowColor: 'black',
    textShadowOffset: {
      width: 1,
      height: 1
    },
  },
  headerName: {
    fontWeight: 'bold',
  },
});

export default App;
