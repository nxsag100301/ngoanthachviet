import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from './ui/button'
import { toast } from 'react-toastify'

const AuctionForm = forwardRef(
  ({ onOpenDialog, currentPrice, stepPrice }, ref) => {
    const btnRef = useRef(null)

    const bidSchema = z.object({
      yourBid: z
        .string()
        .refine((val) => Number(val) > 0, {
          message: 'Bước giá sai yêu cầu'
        })
        .refine((val) => Number(val) % Number(stepPrice) === 0, {
          message: `Giá đặt phải chia hết cho bước giá (${stepPrice})`
        })
    })

    useImperativeHandle(
      ref,
      () => {
        return {
          submit() {
            btnRef.current.click()
          }
        }
      },
      []
    )

    const {
      reset,
      register,
      handleSubmit,
      formState: { errors }
    } = useForm({
      resolver: zodResolver(bidSchema),
      defaultValues: {
        yourBid: ''
      }
    })

    const onSubmit = (data) => {
      console.log('Form submitted:', data)
      reset()
      onOpenDialog(false)
      toast.success('Đấu giá thành công!')
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <div className='space-y-2 relative'>
          <Label htmlFor='currentPrice'>Giá hiện tại</Label>
          <Input
            id='currentPrice'
            readOnly
            className='placeholder:text-gray-400'
            placeholder={`${Number(currentPrice).toLocaleString('vi-VN')} VND`}
          />
        </div>

        <div className='space-y-2 relative'>
          <Label htmlFor='stepPrice'>Bước giá</Label>
          <Input
            id='stepPrice'
            type='number'
            readOnly
            placeholder={`${Number(stepPrice).toLocaleString('vi-VN')} VND`}
            className={`placeholder:text-gray-400 no-spinner ${
              errors.stepPrice && 'border-red-500'
            }`}
          />
          {errors.stepPrice && (
            <p className='text-red-500 text-xs absolute -bottom-4'>
              {errors.stepPrice.message}
            </p>
          )}
        </div>

        <div className='space-y-2 relative'>
          <Label htmlFor='yourBid'>Đặt giá của bạn</Label>
          <Input
            id='yourBid'
            type='number'
            placeholder='Nhập giá bạn muốn đặt'
            {...register('yourBid')}
            className={`placeholder:text-gray-400 no-spinner ${
              errors.yourBid && 'border-red-500'
            }`}
          />
          {errors.yourBid && (
            <p className='text-red-500 text-xs absolute -bottom-4'>
              {errors.yourBid.message}
            </p>
          )}
        </div>
        <Button type='submit' className='hidden' ref={btnRef}>
          Submit
        </Button>
      </form>
    )
  }
)

export default AuctionForm
