import { galleryTimeline } from '../data/portfolio';
import { Calendar } from 'lucide-react';

// Import all photos
import photo1 from '../data/photo1.JPG';
import photo2 from '../data/photo2.JPG';
import photo3 from '../data/photo3.jpg';
import photo4 from '../data/photo4.jpg';
import photo5 from '../data/photo5.JPG';
import photo6 from '../data/photo6.JPG';


const photoMap = {
  'photo1.jpg': photo1,
  'photo2.jpg': photo2,
  'photo3.jpg': photo3,
  'photo4.jpg': photo4,
  'photo5.jpg': photo5,
  'photo6.jpg': photo6,
 
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 tracking-tight text-gray-100">Community Highlights</h2>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/20"></div>
          
          <div className="space-y-12">
            {galleryTimeline.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              
              return (
                <div key={idx} className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 z-10 border-4 border-black"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="group relative overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300">
                      {/* Image */}
                      <div className="aspect-video overflow-hidden bg-white/5">
                        <img 
                          src={photoMap[item.image]}
                          alt={item.title}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Info overlay */}
                      <div className="p-6 bg-black/80 backdrop-blur-sm">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty space for opposite side on desktop */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
