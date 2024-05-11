import {Box, Container, Grid, Paper, Button} from '@mui/material'
import HeaderSignIn from "../../components/header/Header-signed-in/navbar-signin"
import Footer from "../../components/footer"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

const DetailClass = () => {
    const {id} = useParams()
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`https://localhost:7012/api/Course/GetByCategoryId?categoryId=${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCourses(data);
                console.log('Courses:', data);
            })
            .catch(error => {
                console.error('Error fetching courses:', error);
            });
    }, [id]); 

    useEffect(() => {
        console.log(courses)
    },[courses])

    return (
        <Container>
        <HeaderSignIn/>
        <Box>
        <div className="flex" style={{alignItems: 'flex-start'}}>
            <div>
                <img src='' style={{ marginRight: '50px'  }}></img>
            </div>
            <div>
                <div style={{fontSize: '40px'}}>
                Tom yum thailand <br/>idr 450.000 <br/>
                </div>
                <select id="tanggal" name="tanggal" style={{marginTop: '40px', padding: '10px, 20px'}}>
                    <option value="1">rabu, 27 juli 2022</option>
                    <option value="2">selasa, 6 juni 2023</option>
                    <option value="3">jumat, 10 oktober 2023</option>
                </select>
                <div style={{marginTop: '30px'}}>
                <Button 
                    variant="outlined"
                    sx={[{ '&:hover': { 
                            backgroundColor: 'white', 
                            border: '1px solid #5B4947' }, 
                        borderRadius: '8px', 
                        marginRight: '40px', 
                        backgroundColor: 'white', 
                        border: '1px solid #5B4947', 
                        color: '#5B4947', 
                        width: '233.5px',
                        fontFamily: 'Montserrat, sans-serif' }]}>
                            Addtocart
                </Button>
                <Button 
                    variant="contained" 
                    onClick='' 
                    sx={[{ '&:hover': { 
                            backgroundColor: '#EA9E1F' }, 
                        width: '140px', 
                        borderRadius: '8px', 
                        backgroundColor: '#EA9E1F', 
                        color: '#5B4947', 
                        fontFamily: 'Montserrat, sans-serif'}]}>
                            Buynow
                </Button>
                </div>
            </div>
        </div>
        </Box>

           <Box
                sx={{
                    display: 'column',
                    padding: '46px 70px 46px 70px',
                    alignContent: 'center',
                    fontFamily: 'Montserrat'
                }}
            >
                <div
                    style={{
                        fontWeight: 600,
                        fontSize: '16px',
                        marginBottom: '16px'
                    }}
                >Description</div>

                <div
                    style={{
                        fontWeight: 400,
                        fontSize: '16px',
                        textAlign: 'justify',
                        color: '#333333'
                    }}
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </Box>
            <div style={{
                marginTop: '56px',
                marginBottom: '80px',
                color: '#5B4947',
                fontSize: '32px',
                fontWeight: 600,
                fontFamily: 'Montserrat',
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                Another menu in this class
            </div>

            <Grid container spacing={2} fontFamily={'Montserrat'}>
                {courses.map((course, index) => (
                  <Grid key={`${index}`} xs={12} sm={6} md={4}>
                        <Paper elevation={0} style={{ padding: 0 }}>
                            <div> <img src={course.img}/> </div>
                            <div style={{
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    color: '#828282'
                                }}
                            > {course.description} </div>
                            <div style={{
                                    fontWeight: 600,
                                    width: '320px',
                                    height: '70px',
                                    fontSize: '20px',
                                    color: '#5B4947'
                                }}> {course.course_Name} </div>
                            <div style={{
                                fontWeight: 600,
                                fontSize: '20px',
                                color: '#FABC1D',
                                marginBottom: '24px'
                            }}>{course.course_price}  </div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            
            <Footer/>
        </Container>
        
    )   
}

export default DetailClass