'use client'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
// import cn from 'classnames'
import dayjs from 'dayjs'

type Props = {
  status: 'running' | 'succeeded' | 'failed' | 'stopped'
  executor?: string
  startTime?: number
  time?: number
  tokens?: number
  fee?: number
  currency?: string
  steps?: number
}

const MetaData: FC<Props> = ({
  status,
  executor,
  startTime = 0,
  time,
  tokens,
  fee = 0,
  currency = 'USD',
  steps = 1,
}) => {
  const { t } = useTranslation()

  return (
    <div className='relative'>
      <div className='h-6 leading-6 text-gray-500 text-xs font-medium'>{t('runLog.meta.title')}</div>
      <div className='py-1'>
        <div className='flex'>
          <div className='shrink-0 w-[104px] px-2 py-[5px] text-gray-500 text-xs leading-[18px] truncate'>{t('runLog.meta.status')}</div>
          <div className='grow px-2 py-[5px] text-gray-900 text-xs leading-[18px]'>
            {status === 'running' && (
              <div className='my-[5px] w-16 h-2 rounded-sm bg-[rgba(0,0,0,0.05)]'/>
            )}
            {status === 'succeeded' && (
              <span>SUCCESS</span>
            )}
            {status === 'failed' && (
              <span>FAIL</span>
            )}
            {status === 'stopped' && (
              <span>STOP</span>
            )}
          </div>
        </div>
        <div className='flex'>
          <div className='shrink-0 w-[104px] px-2 py-[5px] text-gray-500 text-xs leading-[18px] truncate'>{t('runLog.meta.executor')}</div>
          <div className='grow px-2 py-[5px] text-gray-900 text-xs leading-[18px]'>
            {status === 'running' && (
              <div className='my-[5px] w-[88px] h-2 rounded-sm bg-[rgba(0,0,0,0.05)]'/>
            )}
            {status !== 'running' && (
              <span>{executor}</span>
            )}
          </div>
        </div>
        <div className='flex'>
          <div className='shrink-0 w-[104px] px-2 py-[5px] text-gray-500 text-xs leading-[18px] truncate'>{t('runLog.meta.startTime')}</div>
          <div className='grow px-2 py-[5px] text-gray-900 text-xs leading-[18px]'>
            {status === 'running' && (
              <div className='my-[5px] w-[72px] h-2 rounded-sm bg-[rgba(0,0,0,0.05)]'/>
            )}
            {status !== 'running' && (
              <span>{dayjs(startTime * 1000).format('YYYY-MM-DD hh:mm:ss')}</span>
            )}
          </div>
        </div>
        <div className='flex'>
          <div className='shrink-0 w-[104px] px-2 py-[5px] text-gray-500 text-xs leading-[18px] truncate'>{t('runLog.meta.time')}</div>
          <div className='grow px-2 py-[5px] text-gray-900 text-xs leading-[18px]'>
            {status === 'running' && (
              <div className='my-[5px] w-[72px] h-2 rounded-sm bg-[rgba(0,0,0,0.05)]'/>
            )}
            {status !== 'running' && (
              <span>{`${time}s`}</span>
            )}
          </div>
        </div>
        <div className='flex'>
          <div className='shrink-0 w-[104px] px-2 py-[5px] text-gray-500 text-xs leading-[18px] truncate'>{t('runLog.meta.tokens')}</div>
          <div className='grow px-2 py-[5px] text-gray-900 text-xs leading-[18px]'>
            {status === 'running' && (
              <div className='my-[5px] w-[48px] h-2 rounded-sm bg-[rgba(0,0,0,0.05)]'/>
            )}
            {status !== 'running' && (
              <span>{`${tokens} Tokens · ${fee.toLocaleString('en-US', { style: 'currency', currency, minimumFractionDigits: 4 })}`}</span>
            )}
          </div>
        </div>
        <div className='flex'>
          <div className='shrink-0 w-[104px] px-2 py-[5px] text-gray-500 text-xs leading-[18px] truncate'>{t('runLog.meta.steps')}</div>
          <div className='grow px-2 py-[5px] text-gray-900 text-xs leading-[18px]'>
            {status === 'running' && (
              <div className='my-[5px] w-[24px] h-2 rounded-sm bg-[rgba(0,0,0,0.05)]'/>
            )}
            {status !== 'running' && (
              <span>{steps}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MetaData
