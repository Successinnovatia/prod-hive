import React, { useState } from 'react';
import { Users, X, Plus, Download, Edit, Trash2 } from 'lucide-react';

interface Stakeholder {
  id: string;
  name: string;
  role: string;
  influence: number;
  interest: number;
  culturalContext: string;
  communicationPreference: string;
  relationship: 'strong' | 'moderate' | 'weak';
  category: string;
}

interface StakeholderMapperProps {
  isOpen: boolean;
  onClose: () => void;
}

const StakeholderMapper: React.FC<StakeholderMapperProps> = ({ isOpen, onClose }) => {
  const [stakeholders, setStakeholders] = useState<Stakeholder[]>([
    {
      id: '1',
      name: 'Amara Okafor',
      role: 'Regional Director',
      influence: 9,
      interest: 8,
      culturalContext: 'Nigerian business culture, values relationship building',
      communicationPreference: 'Face-to-face meetings, WhatsApp',
      relationship: 'strong',
      category: 'Internal'
    },
    {
      id: '2',
      name: 'Central Bank Representative',
      role: 'Regulatory Officer',
      influence: 10,
      interest: 6,
      culturalContext: 'Formal government protocols, English/French bilingual',
      communicationPreference: 'Official emails, formal meetings',
      relationship: 'moderate',
      category: 'Regulatory'
    },
    {
      id: '3',
      name: 'Community Leader',
      role: 'Local Chief',
      influence: 7,
      interest: 9,
      culturalContext: 'Traditional authority, local language important',
      communicationPreference: 'In-person visits, local language',
      relationship: 'weak',
      category: 'Community'
    }
  ]);

  const [newStakeholder, setNewStakeholder] = useState({
    name: '',
    role: '',
    influence: 5,
    interest: 5,
    culturalContext: '',
    communicationPreference: '',
    relationship: 'moderate' as const,
    category: 'Internal'
  });

  const [editingId, setEditingId] = useState<string | null>(null);

  const categories = ['Internal', 'External', 'Regulatory', 'Community', 'Partners', 'Customers'];
  const relationships = [
    { value: 'strong', label: 'Strong', color: 'bg-green-100 text-green-800' },
    { value: 'moderate', label: 'Moderate', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'weak', label: 'Weak', color: 'bg-red-100 text-red-800' }
  ];

  const addStakeholder = () => {
    if (newStakeholder.name.trim() && newStakeholder.role.trim()) {
      const stakeholder: Stakeholder = {
        id: Date.now().toString(),
        ...newStakeholder
      };
      setStakeholders([...stakeholders, stakeholder]);
      setNewStakeholder({
        name: '',
        role: '',
        influence: 5,
        interest: 5,
        culturalContext: '',
        communicationPreference: '',
        relationship: 'moderate',
        category: 'Internal'
      });
    }
  };

  const removeStakeholder = (id: string) => {
    setStakeholders(stakeholders.filter(s => s.id !== id));
  };

  const updateStakeholder = (id: string, field: keyof Stakeholder, value: any) => {
    setStakeholders(stakeholders.map(s => 
      s.id === id ? { ...s, [field]: value } : s
    ));
  };

  const getQuadrant = (influence: number, interest: number) => {
    if (influence >= 7 && interest >= 7) return { name: 'Manage Closely', color: 'bg-red-100 border-red-300' };
    if (influence >= 7 && interest < 7) return { name: 'Keep Satisfied', color: 'bg-yellow-100 border-yellow-300' };
    if (influence < 7 && interest >= 7) return { name: 'Keep Informed', color: 'bg-blue-100 border-blue-300' };
    return { name: 'Monitor', color: 'bg-gray-100 border-gray-300' };
  };

  const exportMapping = () => {
    const reportData = `
Stakeholder Mapping Report - African Market Context
=================================================

Stakeholder Analysis Summary:
Total Stakeholders: ${stakeholders.length}
Categories: ${categories.filter(cat => stakeholders.some(s => s.category === cat)).join(', ')}

Stakeholder Matrix:
${stakeholders.map(stakeholder => {
  const quadrant = getQuadrant(stakeholder.influence, stakeholder.interest);
  return `
${stakeholder.name} (${stakeholder.role})
  Category: ${stakeholder.category}
  Influence: ${stakeholder.influence}/10
  Interest: ${stakeholder.interest}/10
  Quadrant: ${quadrant.name}
  Relationship: ${stakeholder.relationship}
  Cultural Context: ${stakeholder.culturalContext}
  Communication Preference: ${stakeholder.communicationPreference}
`;
}).join('')}

Engagement Strategy by Quadrant:
- Manage Closely (High Influence, High Interest): Regular updates, direct involvement
- Keep Satisfied (High Influence, Low Interest): Periodic updates, address concerns
- Keep Informed (Low Influence, High Interest): Regular communication, gather feedback
- Monitor (Low Influence, Low Interest): Minimal effort, watch for changes

Cultural Considerations:
- Respect for traditional authority structures
- Importance of relationship building before business
- Multi-language communication needs
- Formal vs informal communication preferences

Generated by PM Africa Tools
    `;

    const blob = new Blob([reportData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'stakeholder-mapping-report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="bg-orange-500 p-2 rounded-lg mr-3">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Stakeholder Mapping Tool</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Add New Stakeholder */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Stakeholder</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={newStakeholder.name}
                onChange={(e) => setNewStakeholder({ ...newStakeholder, name: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <input
                type="text"
                placeholder="Role/Title"
                value={newStakeholder.role}
                onChange={(e) => setNewStakeholder({ ...newStakeholder, role: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <select
                value={newStakeholder.category}
                onChange={(e) => setNewStakeholder({ ...newStakeholder, category: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <select
                value={newStakeholder.relationship}
                onChange={(e) => setNewStakeholder({ ...newStakeholder, relationship: e.target.value as any })}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                {relationships.map(rel => (
                  <option key={rel.value} value={rel.value}>{rel.label}</option>
                ))}
              </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Influence Level: {newStakeholder.influence}/10
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={newStakeholder.influence}
                  onChange={(e) => setNewStakeholder({ ...newStakeholder, influence: parseInt(e.target.value) })}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Interest Level: {newStakeholder.interest}/10
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={newStakeholder.interest}
                  onChange={(e) => setNewStakeholder({ ...newStakeholder, interest: parseInt(e.target.value) })}
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <textarea
                placeholder="Cultural context and considerations"
                value={newStakeholder.culturalContext}
                onChange={(e) => setNewStakeholder({ ...newStakeholder, culturalContext: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                rows={2}
              />
              <textarea
                placeholder="Communication preferences"
                value={newStakeholder.communicationPreference}
                onChange={(e) => setNewStakeholder({ ...newStakeholder, communicationPreference: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                rows={2}
              />
            </div>

            <button
              onClick={addStakeholder}
              className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Add Stakeholder</span>
            </button>
          </div>

          {/* Stakeholder Matrix Visualization */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Influence-Interest Matrix</h3>
              <button
                onClick={exportMapping}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <Download className="h-4 w-4" />
                <span>Export Report</span>
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 h-96">
              {/* High Influence, High Interest */}
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">Manage Closely</h4>
                <p className="text-xs text-red-600 mb-3">High Influence, High Interest</p>
                <div className="space-y-2">
                  {stakeholders.filter(s => s.influence >= 7 && s.interest >= 7).map(stakeholder => (
                    <div key={stakeholder.id} className="bg-white p-2 rounded border text-xs">
                      <div className="font-medium">{stakeholder.name}</div>
                      <div className="text-gray-600">{stakeholder.role}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* High Influence, Low Interest */}
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Keep Satisfied</h4>
                <p className="text-xs text-yellow-600 mb-3">High Influence, Low Interest</p>
                <div className="space-y-2">
                  {stakeholders.filter(s => s.influence >= 7 && s.interest < 7).map(stakeholder => (
                    <div key={stakeholder.id} className="bg-white p-2 rounded border text-xs">
                      <div className="font-medium">{stakeholder.name}</div>
                      <div className="text-gray-600">{stakeholder.role}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Low Influence, High Interest */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Keep Informed</h4>
                <p className="text-xs text-blue-600 mb-3">Low Influence, High Interest</p>
                <div className="space-y-2">
                  {stakeholders.filter(s => s.influence < 7 && s.interest >= 7).map(stakeholder => (
                    <div key={stakeholder.id} className="bg-white p-2 rounded border text-xs">
                      <div className="font-medium">{stakeholder.name}</div>
                      <div className="text-gray-600">{stakeholder.role}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Low Influence, Low Interest */}
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Monitor</h4>
                <p className="text-xs text-gray-600 mb-3">Low Influence, Low Interest</p>
                <div className="space-y-2">
                  {stakeholders.filter(s => s.influence < 7 && s.interest < 7).map(stakeholder => (
                    <div key={stakeholder.id} className="bg-white p-2 rounded border text-xs">
                      <div className="font-medium">{stakeholder.name}</div>
                      <div className="text-gray-600">{stakeholder.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Stakeholder List */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Detailed Stakeholder Information</h3>
            {stakeholders.map(stakeholder => {
              const quadrant = getQuadrant(stakeholder.influence, stakeholder.interest);
              const relationship = relationships.find(r => r.value === stakeholder.relationship);
              
              return (
                <div key={stakeholder.id} className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{stakeholder.name}</h4>
                      <p className="text-gray-600">{stakeholder.role}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                        {stakeholder.category}
                      </span>
                      <span className={`px-2 py-1 rounded text-sm ${relationship?.color}`}>
                        {relationship?.label}
                      </span>
                      <button
                        onClick={() => removeStakeholder(stakeholder.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <div className="text-sm font-medium text-gray-700">Influence: {stakeholder.influence}/10</div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-orange-500 h-2 rounded-full" 
                          style={{ width: `${stakeholder.influence * 10}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700">Interest: {stakeholder.interest}/10</div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${stakeholder.interest * 10}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className={`p-2 rounded text-center text-sm font-medium ${quadrant.color}`}>
                      {quadrant.name}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-700 mb-1">Cultural Context:</div>
                      <div className="text-gray-600">{stakeholder.culturalContext}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-700 mb-1">Communication Preference:</div>
                      <div className="text-gray-600">{stakeholder.communicationPreference}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {stakeholders.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No stakeholders added yet. Add your first stakeholder above to get started.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StakeholderMapper;