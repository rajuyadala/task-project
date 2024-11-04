
import React, { useState } from 'react';
import { Button, Radio, RadioGroup, FormControlLabel, TextField, Typography, FormControl, FormLabel } from '@mui/material';

const MedicationCompetencyForm = () => {
  // States to manage form inputs
  const [training, setTraining] = useState({ completedTraining: '', readPolicy: '', accessPolicy: '' });
  const [administration, setAdministration] = useState({ handHygiene: '', preparation: '' });
  const [firstSignature, setFirstSignature] = useState({ name: '', date: '', locked: false });
  const [secondSignature, setSecondSignature] = useState({ name: '', date: '', locked: false });
  const [formArchived, setFormArchived] = useState(false);

  const handleInputChange = (section, field, value) => {
    if (section === 'training') setTraining({ ...training, [field]: value });
    if (section === 'administration') setAdministration({ ...administration, [field]: value });
  };

  const handleFirstSignature = () => {
    setFirstSignature({ ...firstSignature, locked: true });
  };

  const handleSecondSignature = () => {
    setSecondSignature({ ...secondSignature, locked: true });
    setFormArchived(true); // Archive form after second signature
  };

  return (
    <div className='body'>
      <form className='form-container'>
    <div style={{ padding: 20 }}>
     <Typography variant="h4">Medication Handling Competency Form</Typography>

      {/* Section 1: Training and Policy */}
      <div className='section-heading'>
      <FormControl component="fieldset">
        <FormLabel component="legend">Training and Policy</FormLabel>
        <p>Has the member of staff completed training on the safe handling of medicines?</p>
        <RadioGroup
          value={training.completedTraining}
          onChange={(e) => handleInputChange('training', 'completedTraining', e.target.value)}
        >
          <div className='radio-group radio-label'>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          </div>
        </RadioGroup>
        <RadioGroup
          value={training.readPolicy}
          onChange={(e) => handleInputChange('training', 'readPolicy', e.target.value)}
        >
          <p>Has the member of staff read the medication policy and signed to indicate that they have done so?</p>
          <div className='radio-group radio-label'>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          </div>
        </RadioGroup>
        <RadioGroup
          value={training.accessPolicy}
          onChange={(e) => handleInputChange('training', 'accessPolicy', e.target.value)}
        >
          <p>Does the member of staff know how to access the medication policy if they wish to check any information?</p>
          <div className='radio-group radio-label'>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          </div>
        </RadioGroup>
      </FormControl>
</div>
      {/* Section 2: Administration of Medicines */}
      <FormControl component="fieldset">
        <FormLabel component="legend">Administration of Medicines</FormLabel>
        <RadioGroup
          value={administration.handHygiene}
          onChange={(e) => handleInputChange('administration', 'handHygiene', e.target.value)}
        >
          <p>Did the member of staff wash their hands before starting to administer any medication and 
            follow appropriate hygiene measures throughout the medication round?</p>
          <div className='radio-group radio-label'>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          </div>
        </RadioGroup>
        <RadioGroup
          value={administration.preparation}
          onChange={(e) => handleInputChange('administration', 'preparation', e.target.value)}
        >
          <p>Did the member of staff make sure that everything was properly prepared before starting the medication round?</p>
          <div className='radio-group radio-label'>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          </div>
        </RadioGroup>
      </FormControl>
      {/* Section 3: Signature Collection */}
      
        <Typography variant="h6">Signatures</Typography>
        <div className='medi'>
        <div className='input-field '>
        <TextField
          label="First User Name"
          value={firstSignature.name}
          disabled={firstSignature.locked}
          onChange={(e) => setFirstSignature({ ...firstSignature, name: e.target.value })}
        />
        </div>
        <div className='date-input'>
        <TextField
          label="Date"
          type="date"
          value={firstSignature.date}
          disabled={firstSignature.locked}
          onChange={(e) => setFirstSignature({ ...firstSignature, date: e.target.value })}
          InputLabelProps={{ shrink: true }}
        />
        </div>
        <div className='submit-button'>
        <Button variant="contained" onClick={handleFirstSignature} disabled={firstSignature.locked}>
          Submit First Signature
        </Button>
        </div>
        
        {firstSignature.locked && (
          <>
          <div className='medi'>
          <div className='input-field '>
            <TextField
              label="Second User Name"
              value={secondSignature.name}
              disabled={secondSignature.locked}
              onChange={(e) => setSecondSignature({ ...secondSignature, name: e.target.value })}
            />
            </div>
            <TextField
              label="Date"
              type="date"
              value={secondSignature.date}
              disabled={secondSignature.locked}
              onChange={(e) => setSecondSignature({ ...secondSignature, date: e.target.value })}
              InputLabelProps={{ shrink: true }}
            />
            </div>
            <div className='submit-button'>
            <Button variant="contained" onClick={handleSecondSignature} disabled={secondSignature.locked}>
              Submit Second Signature
            </Button>
    </div>
          </>
        )}
      </div>

      {/* Archive Notification */}
      {formArchived && <Typography variant="h6" color="secondary">Form Archived in Historical Assessments</Typography>}
    </div>
    </form>
    </div>
  );
};

export default MedicationCompetencyForm;
