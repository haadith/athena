package com.athena

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class HealthConnectModule(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "HealthConnectModule"

    @ReactMethod
    fun fetchAllData(promise: Promise) {
        // TODO: Implement fetching all Health Connect data
        promise.resolve("Health data placeholder")
    }
}
