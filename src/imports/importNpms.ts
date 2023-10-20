//*=================== Файл импорта NPM модулей и их типов ======================*//

import ReactDOM from 'react-dom/client'
import React, { useState, useEffect, useRef, forwardRef, useCallback, useMemo, useTransition, Suspense, BaseSyntheticEvent, MouseEvent, ForwardRefExoticComponent, RefAttributes, MutableRefObject, RefObject, SetStateAction } from 'react'
import { createPortal } from 'react-dom'
import { BrowserRouter, Routes, Route, NavLink, Link, useNavigate, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { Provider } from 'react-redux'
import { configureStore, createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import i18n from 'i18next'
import { initReactI18next, useTranslation, Trans } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'
import cookies from 'js-cookie'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { SwiperOptions, Thumbs } from 'swiper'
import Countdown, { zeroPad } from 'react-countdown'
import useScrollbarSize from 'react-scrollbar-size'
import { motion, AnimatePresence, Variants, useMotionValueEvent, useScroll } from 'framer-motion'

export { ReactDOM, React, useState, useEffect, useRef, forwardRef, useCallback, useMemo, useTransition, Suspense,  createPortal, BrowserRouter, Routes, Route, NavLink, Link, useNavigate, useLocation, classNames, Provider, configureStore, createSlice, createAsyncThunk, axios, i18n, initReactI18next, LanguageDetector, HttpApi, useTranslation, Trans, cookies, Swiper, SwiperSlide, SwiperCore, Thumbs, Countdown, zeroPad, useScrollbarSize, motion, AnimatePresence, useMotionValueEvent, useScroll }

export type { BaseSyntheticEvent, MouseEvent, ForwardRefExoticComponent, RefAttributes, MutableRefObject, RefObject, PayloadAction, SwiperOptions, Variants, SetStateAction }
