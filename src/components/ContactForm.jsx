import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { toast } from 'react-toastify'
import { Textarea } from './ui/textarea'

const contactSchema = z.object({
  name: z
    .string({
      required_error: 'Vui lòng nhập tên'
    })
    .min(1, 'Vui lòng nhập tên'),

  phone: z
    .string({
      required_error: 'Vui lòng nhập số điện thoại'
    })
    .min(10, 'Số điện thoại không hợp lệ')
    .max(10, 'Số điện thoại không hợp lệ'),

  email: z
    .string({
      required_error: 'Vui lòng nhập email'
    })
    .email('Email không hợp lệ'),

  question: z
    .string({
      required_error: 'Vui lòng nhập câu hỏi'
    })
    .min(1, 'Vui lòng nhập câu hỏi')
})

const ContactForm = () => {
  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = (data) => {
    console.log('Form submitted:', data)
    reset()
    toast.success('Liên hệ thành công!')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full py-9 px-6 xl:px-20 space-y-5'
    >
      <div className='space-y-2 relative'>
        <Label htmlFor='name'>Tên khách hàng</Label>
        <Input
          id='name'
          placeholder='Nhập tên'
          {...register('name')}
          className={`placeholder:text-gray-400 ${
            errors.name &&
            'border-red-500 focus:ring-0 focus:outline-none focus:border-red-500'
          }`}
        />
        {errors.name && (
          <p className='text-red-500 text-xs absolute -bottom-4'>
            {errors.name.message}
          </p>
        )}
      </div>

      <div className='space-y-2 relative'>
        <Label htmlFor='phone'>Số điện thoại</Label>
        <Input
          id='phone'
          placeholder='Nhập số điện thoại'
          type='tel'
          {...register('phone')}
          onChange={(e) => {
            const onlyNumbers = e.target.value.replace(/\D/g, '')
            setValue('phone', onlyNumbers, {
              shouldValidate: true,
              shouldDirty: true
            })
          }}
          className={`placeholder:text-gray-400 ${
            errors.phone &&
            'border-red-500 focus:ring-0 focus:outline-none focus:border-red-500'
          }`}
        />
        {errors.phone && (
          <p className='text-red-500 text-xs absolute -bottom-4'>
            {errors.phone.message}
          </p>
        )}
      </div>

      <div className='space-y-2 relative'>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          placeholder='Nhập email'
          type='email'
          {...register('email')}
          className={`placeholder:text-gray-400 ${
            errors.email &&
            'border-red-500 focus:ring-0 focus:outline-none focus:border-red-500'
          }`}
        />
        {errors.email && (
          <p className='text-red-500 text-xs absolute -bottom-4'>
            {errors.email.message}
          </p>
        )}
      </div>

      <div className='space-y-2 relative'>
        <Label htmlFor='question'>Câu hỏi</Label>
        <Textarea
          id='question'
          placeholder='Chúng tôi có thể giúp gì cho bạn?'
          rows={2}
          {...register('question')}
          className={`resize-none placeholder:text-gray-400 ${
            errors.question &&
            'border-red-500 focus:ring-0 focus:outline-none focus:border-red-500'
          }`}
        />
        {errors.question && (
          <p className='text-red-500 text-xs absolute -bottom-4'>
            {errors.question.message}
          </p>
        )}
      </div>

      <Button
        type='submit'
        className='w-[130px] h-[50px] lg:w-[162px] lg:h-[60px] text-white text-base lg:text-lg'
      >
        Gửi thông tin
      </Button>
    </form>
  )
}

export default ContactForm
