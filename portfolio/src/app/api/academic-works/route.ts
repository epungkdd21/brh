import { NextResponse } from 'next/server';

const academicWorks = [
  {
    id: 1,
    title: 'Penelitian tentang Pendidikan Islam',
    description: 'Studi mendalam tentang metodologi pengajaran dalam konteks pendidikan Islam modern.',
    year: 2022,
    type: 'Journal Article'
  },
  {
    id: 2,
    title: 'Pengembangan Kurikulum Akademik',
    description: 'Kontribusi dalam pengembangan kurikulum untuk program studi di UIN Syarif Hidayatullah.',
    year: 2021,
    type: 'Book Chapter'
  },
  {
    id: 3,
    title: 'Konferensi Internasional Pendidikan',
    description: 'Presentasi tentang inovasi dalam pendidikan tinggi di konferensi internasional.',
    year: 2023,
    type: 'Conference Paper'
  }
];

export async function GET() {
  return NextResponse.json(academicWorks);
}