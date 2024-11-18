import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PrismaClient } from '@prisma/client'
import Link from 'next/link';
import React from 'react'
//Buat variabel "Prisma"
const prisma = new PrismaClient();

export default async function RootPage() {
  // buat variabel "mahasiswa"
const mahasiswa = await prisma.tb_mahasiswa.findMany({
  where: {
        status: "Y",
        // prodi: {
        //   contains: "formasi"
        // }
      },
})
// const mahasiswa = await prisma.tb_mahasiswa.findUnique({
//   where: {
//     id: 2,
//   }, 
// })


  return (
    <>
    {/* tampilkan data mahasiswa */}
    <table className='w-full'>
        <thead>
          <tr className='bg-slate-300 h-12 '>
            <th className='w-10% border border-slate-700'>Aksi</th>
            <th className='w-10% border border-slate-700'>NPM</th>
            <th className='w-1/2 border border-slate-700'>Nama</th>
            <th className='w-30% border border-slate-700'>Prodi</th>
          </tr>
        </thead>
        <tbody>
      {mahasiswa.map((data: any, index: number) => ( 
      // <div key={index}>
      //   <div>
      //     {data.npm} - {data.nama} - {data.prodi}
      //   </div>
      // </div>

      <tr>
        <td className='border border-slate-700 p-2.5 text-center'>
          {/* icon edit */}
          <Link href={"/"} className='bg-sky-500 text-white py-5X px-2.5 rounded-md mr-1 text-sm' title='Ubah Data'>
          <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
          </Link>

          {/* icon delete */}
          <Link href={"/"} className='bg-red-500 text-white py-5X px-2.5 rounded-md ml-1 text-sm' title='Hapus Data'>
          <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
          </Link>
        </td>
        <td className='border border-slate-700 px-2.5 text-center'>{data.npm}</td>
        <td className='border border-slate-700 px-2.5 text-justify'>{data.nama}</td>
        <td className='border border-slate-700 px-2.5 text-center'>{data.prodi}</td>
      </tr>
    ))} 
    </tbody>
    </table>
    {/* {mahasiswa?.nama} */}
    
    </>
  )
}
