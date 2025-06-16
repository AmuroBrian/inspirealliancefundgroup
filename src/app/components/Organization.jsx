import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

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
                title: 'CEO'
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

    return (
        <div style={{ overflowX: 'auto', padding: '1rem' }}>
            <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
        </div>
    );
}
