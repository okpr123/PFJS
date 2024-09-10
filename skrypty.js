   // Skrypt dla Hamburger Menu -->
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    const app = Vue.createApp({
        data() {
            return {
                // Dane dla sekcji "Usługi"
                services: [
                    { name: 'Porady internistyczne', details: 'Pełne konsultacje z internistą.', showDetails: false },
                    { name: 'Badania laboratoryjne', details: 'Szeroki zakres badań diagnostycznych.', showDetails: false },
                    { name: 'Konsultacje specjalistyczne', details: 'Wizyty u lekarzy specjalistów.', showDetails: false },
                    { name: 'Fizjoterapia', details: 'Indywidualne terapie rehabilitacyjne.', showDetails: false }
                ],
                // Dane dla galerii zdjęć
                images: [
                    'images/image1.jpg',
                    'images/image2.jpg',
                    'images/image3.jpg',
                    'images/header.jpg'
                ],
                currentImageIndex: 0, //
                // Dane dla kalendarza umawiania wizyt
                specialists: [
                    { name: 'Internista', availableTimes: ['09:00', '10:00', '11:00', '12:00'] },
                    { name: 'Pediatra', availableTimes: ['10:00', '11:00', '13:00', '14:00'] },
                    { name: 'Kardiolog', availableTimes: ['08:00', '09:00', '11:30', '15:00'] },
                    { name: 'Fizjoterapeuta', availableTimes: ['09:30', '10:30', '12:00', '14:30'] }
                ],
                selectedSpecialist: '',
                appointmentDate: '',
                appointmentTime: '',
                appointmentSubmitted: false 
            };
        },
        computed: {
            // Dynamiczne godziny wizyt w zależności od wybranego specjalisty
            availableTimes() {
                return this.selectedSpecialist ? this.selectedSpecialist.availableTimes : [];
            }
        },
        methods: {
            // Metody dla sekcji "Usługi"
            toggleServiceDetails(index) {
                this.services[index].showDetails = !this.services[index].showDetails;
            },
            // Metody dla galerii zdjęć
            prevImage() {
                this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
            },
            nextImage() {
                this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
            },
        // Metoda dla umawiania wizyt
        submitAppointment() {
            if (this.selectedSpecialist && this.appointmentDate && this.appointmentTime) {
                this.appointmentSubmitted = true;
            } else {
                alert('Proszę wypełnić wszystkie pola!');
            }
            }
        }
    });
    
    app.mount('#app');