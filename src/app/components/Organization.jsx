import React, { useState, useRef, useEffect } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function ColoredDemo() {
  const [data] = useState([
    {
      expanded: true,
      type: 'person',
      style: {
        borderRadius: '12px',
        backgroundColor: '#6366F1',
        color: 'white',
        padding: '1rem',
        minWidth: '150px',
        textAlign: 'center'
      },
      data: {
        name: 'International Marketing Department',
      },
      children: [
        {
          expanded: true,
          type: 'person',
          style: {
            borderRadius: '12px',
            backgroundColor: '#3873af',
            color: 'white',
            padding: '1rem',
            minWidth: '120px',
            textAlign: 'center'
          },
          data: {
            name: 'Asia',
            title: 'Executive Director'
          },
          children: [
            {
              label: 'Japan Desk',
              style: {
                borderRadius: '12px',
                backgroundColor: '#3873af',
                color: 'white',
                padding: '1rem',
                minWidth: '100px',
                textAlign: 'center'
              }
            },
            {
              label: 'Singapore Desk',
              style: {
                borderRadius: '12px',
                backgroundColor: '#3873af',
                color: 'white',
                padding: '1rem',
                minWidth: '100px',
                textAlign: 'center'
              }
            }
          ]
        },
        {
          expanded: true,
          type: 'person',
          style: {
            borderRadius: '12px',
            backgroundColor: '#4B888B',
            color: 'white',
            padding: '1rem',
            minWidth: '120px',
            textAlign: 'center'
          },
          data: {
            name: 'Europe',
            title: 'Executive Director'
          },
          children: [
            {
              label: 'Russia Desk',
              style: {
                borderRadius: '12px',
                backgroundColor: '#4B888B',
                color: 'white',
                padding: '1rem',
                minWidth: '100px',
                textAlign: 'center'
              }
            },
            {
              label: 'Italy Desk',
              style: {
                borderRadius: '12px',
                backgroundColor: '#4B888B',
                color: 'white',
                padding: '1rem',
                minWidth: '100px',
                textAlign: 'center'
              }
            }
          ]
        },
        {
          expanded: true,
          type: 'person',
          style: {
            borderRadius: '12px',
            backgroundColor: '#80C32A',
            color: 'white',
            padding: '1rem',
            minWidth: '120px',
            textAlign: 'center'
          },
          data: {
            name: 'North America',
            title: 'Executive Director'
          },
          children: [
            {
              label: 'Canada Desk',
              style: {
                borderRadius: '12px',
                backgroundColor: '#80C32A',
                color: 'white',
                padding: '1rem',
                minWidth: '100px',
                textAlign: 'center'
              }
            },
            {
              label: 'Mexico Desk',
              style: {
                borderRadius: '12px',
                backgroundColor: '#80C32A',
                color: 'white',
                padding: '1rem',
                minWidth: '100px',
                textAlign: 'center'
              }
            }
          ]
        },
        {
          expanded: true,
          type: 'person',
          style: {
            borderRadius: '12px',
            backgroundColor: '#3873af',
            color: 'white',
            padding: '1rem',
            minWidth: '120px',
            textAlign: 'center'
          },
          data: {
            name: 'South America',
            title: 'Executive Director'
          },
          children: [
            {
              label: 'Argentina Desk',
              style: {
                borderRadius: '12px',
                backgroundColor: '#3873af',
                color: 'white',
                padding: '1rem',
                minWidth: '100px',
                textAlign: 'center'
              }
            },
            {
              label: 'Brazil Desk',
              style: {
                borderRadius: '12px',
                backgroundColor: '#3873af',
                color: 'white',
                padding: '1rem',
                minWidth: '100px',
                textAlign: 'center'
              }
            }
          ]
        },
        {
          expanded: true,
          type: 'person',
          style: {
            borderRadius: '12px',
            backgroundColor: '#4B888B',
            color: 'white',
            padding: '1rem',
            minWidth: '120px',
            textAlign: 'center'
          },
          data: {
            name: 'Africa',
            title: 'Executive Director'
          },
          children: [
            {
              label: 'Egypt Desk',
              style: {
                borderRadius: '12px',
                backgroundColor: '#4B888B',
                color: 'white',
                padding: '1rem',
                minWidth: '100px',
                textAlign: 'center'
              }
            },
            {
              label: 'Algeria Desk',
              style: {
                borderRadius: '12px',
                backgroundColor: '#4B888B',
                color: 'white',
                padding: '1rem',
                minWidth: '100px',
                textAlign: 'center'
              }
            }
          ]
        },
        {
          expanded: true,
          type: 'person',
          style: {
            borderRadius: '12px',
            backgroundColor: '#80C32A',
            color: 'white',
            padding: '1rem',
            minWidth: '120px',
            textAlign: 'center'
          },
          data: {
            name: 'Antartica',
            title: 'Executive Director'
          },
          children: [
            {
              label: 'Norway Desk',
              style: {
                borderRadius: '12px',
                backgroundColor: '#80C32A',
                color: 'white',
                padding: '1rem',
                minWidth: '100px',
                textAlign: 'center'
              }
            },
            {
              label: 'Chile Desk',
              style: {
                borderRadius: '12px',
                backgroundColor: '#80C32A',
                color: 'white',
                padding: '1rem',
                minWidth: '100px',
                textAlign: 'center'
              }
            }
          ]
        },
        {
          expanded: true,
          type: 'person',
          style: {
            borderRadius: '12px',
            backgroundColor: '#3873af',
            color: 'white',
            padding: '1rem',
            minWidth: '120px',
            textAlign: 'center'
          },
          data: {
            name: 'Australia',
            title: 'Executive Director'
          },
          children: [
            {
              label: 'Norway Desk',
              style: {
                borderRadius: '12px',
                backgroundColor: '#3873af',
                color: 'white',
                padding: '1rem',
                minWidth: '100px',
                textAlign: 'center'
              }
            },
            {
              label: 'Chile Desk',
              style: {
                borderRadius: '12px',
                backgroundColor: '#3873af',
                color: 'white',
                padding: '1rem',
                minWidth: '100px',
                textAlign: 'center'
              }
            }
          ]
        }
      ]
    }
  ]);

  const nodeTemplate = (node) => {
    if (node.type === 'person') {
      return (
        <div style={node.style}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.9rem' }}>
            <span style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>{node.data.name}</span>
            <span>{node.data.title}</span>
          </div>
        </div>
      );
    }
    return (
      <div style={{ ...node.style, fontSize: '0.85rem' }}>
        {node.label}
      </div>
    );
  };

  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimating) {
            entry.target.style.width = "30%";
            setIsAnimating(true);
          } else if (!entry.isIntersecting) {
            entry.target.style.width = "0%";
            setIsAnimating(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isAnimating]);

   return (
    <section className="py-20 relative overflow-hidden min-h-screen bg-white">
      <div
        ref={sectionRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 h-full transition-all duration-1000 ease-out"
        style={{
          background: 'linear-gradient(90deg, rgba(128, 195, 42, 0.8) 0%, rgba(75, 136, 139, 0.8) 50%, rgba(56, 115, 175, 0.8) 100%)',
          width: '30%',
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Organizational Chart</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600">
            View the hierarchical structure of our international operations.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="overflow-auto mt-8 space-y-8 text-lg text-gray-600 leading-relaxed bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 w-full max-w-[90vw] lg:max-w-[80vw] xl:max-w-[70vw]">
            <div className="scale-[0.75] sm:scale-[0.85] md:scale-90 lg:scale-100 origin-top-left">
              <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}