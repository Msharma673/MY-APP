import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import teachpic from './teachpic.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 11rem;
  padding-bottom: 3rem
  
  @media (max-width: 768px) {
    padding-top: 6rem;
  }
`;

const Banner = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 200px;
  background: url(${teachpic}) no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #EB9F3D;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
    height: 150px;
  }
`;

const FormContainer = styled(animated.div)`
  width: 100%;
  max-width: 600px;
  background: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-block: 3em;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.9rem;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.9rem;
  }
`;

const FileInputLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 10px;
  background: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #e0e0e0;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.9rem;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const Button = styled.button`
  padding: 10px;
  background: #052884;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #041a63;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.9rem;
  }
`;

const TeachWithUsPage = () => {
  const [resume, setResume] = useState(null);
  const formAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 200, friction: 20 }
  });

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
  };

  return (
    <Container>
      <Banner>
        Join Us as a Mentor or Teacher
      </Banner>
      <FormContainer style={formAnimation}>
        <Input type="text" placeholder="Full Name" required />
        <Input type="email" placeholder="Email" required />
        <Input type="tel" placeholder="Phone Number" required />
        <TextArea placeholder="Briefly describe your experience" rows="4" required />
        <FileInputLabel>
          Upload Resume
          <FileInput type="file" accept=".pdf,.doc,.docx" onChange={handleResumeChange} />
        </FileInputLabel>
        {resume && <p>{resume.name}</p>}
        <Button type="submit">Submit</Button>
      </FormContainer>
    </Container>
  );
};

export default TeachWithUsPage;
