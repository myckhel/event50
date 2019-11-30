import React, { PureComponent, useState, useEffect } from 'react'

import { View, StyleSheet, TouchableOpacity} from 'react-native'

import colors from '../../constants/Colors'
import { Text } from '../../components/theme'

export default ({event}) => {
  return (
    <View style={styles.eventContainer}>
      <View style={styles.question}>
        <Text style={styles.eventLabel}>Title: <Text style={styles.eventTitle}>{event.name}</Text></Text>
        <Text style={styles.eventLabel}>Date: <Text style={styles.eventTitle}>{event.edate}</Text></Text>
      </View>
      <Timer event={event} edate={event.edate} />
      <Marker />
    </View>
  )
}

const Marker = (props) => {
  return (
    <View style={styles.marker} >
      <TouchableOpacity
        style={[styles.actionBtn, {backgroundColor: colors.danger}]}
        onClick={() => this.mark(event, 0,() => {this.state.refresh()})}
         >
        <Text style={styles.actionText} >Not Attending</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.actionBtn, {backgroundColor: colors.success}]}
        onClick={() => this.mark(event, 1,() => {this.state.refresh()})}
        >
        <Text style={styles.actionText} >Attending</Text>
      </TouchableOpacity>
    </View>
  )
}

export const Timer = ({event, edate}) => {
  const [time, setTime] = useState({days, hours, mins, secs})
  const [interval, loadInterval] = useState(null)
  const { days, hours, mins, secs } = time

  useEffect(() => {
    counter(edate)
    return () => clearInterval(interval)
  }, [])

  const slicer = (num) => ("0" + num).slice(-2)

  const counter = (date) => {
    var countDownDate = new Date(date).getTime();
    // Update the count down every 1 second
    let x = setInterval(() => {
      // Get todays date and time
      var now = new Date().getTime();
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      // console.log(distance < 0);

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Output the result"
      // console.log(days);
      setTime({
        days: ("0" + days).slice(-2),
        hours: ("0" + hours).slice(-2),
        mins: ("0" + minutes).slice(-2),
        secs: ("0" + seconds).slice(-2),
      })
      // If the count down is over, hide the event
      if (distance < 0) {
        // console.log(interval);
        clearInterval(interval);
        // $('#question').hide();
      }
    }, 1000);
    // console.log(x);
    loadInterval(x)
  }

  return (
    <View style={styles.countdown} id="countdown">
      <Text style={styles.elapsed}>Time Left</Text>
      <View style={{marginBottom: 5}} />
        <View style={styles.timeContainer}>
          <View style={[styles.interval, {backgroundColor: colors.success}]}>
            <Text style={styles.timeText}>{days}</Text>
            <Text style={styles.intervalText}>Days</Text>
          </View>
          <View style={[styles.interval, {backgroundColor: colors.prime}]}>
            <Text style={[styles.timeText]}>{hours}</Text>
            <Text style={styles.intervalText}>Hrs</Text>
          </View>
          <View style={[styles.interval, {backgroundColor: colors.info}]}>
            <Text style={[styles.timeText]}>{mins}</Text>
            <Text style={styles.intervalText}>Mins</Text>
          </View>
          <View style={styles.interval}>
            <Text style={styles.timeText}>{secs}</Text>
            <Text style={styles.intervalText}>Secs</Text>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  timeText: {
    color: colors.white,
    fontSize: 25,
    fontWeight: 'bold',
    textShadowRadius: 5,
    textShadowColor: 'black',
    textShadowOffset: {
      width: 1,
      height: 1
    },
  },
  intervalText: {
    color: colors.white,
    textShadowRadius: 2,
    textShadowColor: 'black',
    textShadowOffset: {
      width: 1,
      height: 1
    },
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
    borderWidth: 2,
    borderColor: colors.white,
    backgroundColor: colors.danger,
    marginLeft: 5,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80/2,
    marginBottom: 10,
  },
  eventContainer: {
    flex: 1,
    marginVertical: 10,
    marginBottom: 20,
    borderTopWidth: 5,
    borderRadius: 10,
    borderTopColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: colors.secondary,
  },
  question: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
    // marginHorizontal: 20,
    padding: 10,
    marginVertical: 10,
    backgroundColor: colors.dark,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'white',
  },
  eventTitle: {
    fontWeight: 'bold',
    marginLeft: 'auto',
  },
  eventLabel: {
    marginRight: 'auto',
  },
  marker: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingTop: 10,
    // position: 'absolute',
    // bottom: -10,
    // zIndex: 10,
  },
  actionBtn: {
    marginBottom: -30,
    // marginTop: -20,
    // height: 19,
    backgroundColor: colors.tintColor,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    zIndex: 199,
  },
  actionText: {
    color: colors.white,
  },
  noAttendance: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
