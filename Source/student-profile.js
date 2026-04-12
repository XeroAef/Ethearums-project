// Map of student IDs to image filenames
const studentImages = {
    1: "1EE77C37-54DA-4675-B855-DF644EA32C57.jpg",
    2: "2vIanhLsqHhg2gno.webp",
    3: "33d93103d56a1a835182aa9ca1f99cf0.jpg",
    4: "3mABdoGwsFuGl6ri.webp",
    5: "4e7a7c5ccf7ae3b281313e4c67a0d216.png",
    6: "8rvfvBgezRMFt7m3.webp",
    7: "943cc817520e220ea36a9e704f3b32b0.png",
    8: "a8296d1083004cb5cd51013947ecfb99.png",
    9: "GRd0Na_WIAAooSL.png",
    10: "IMG_2215.png",
    11: "l3UuYF94eLdFNFoT.webp",
    12: "Ni3l3p6dka9KF7W7.webp",
    13: "RoNm7lmFNV6UTLUL.webp",
    14: "V0VuhcFTqB_MfFT7.webp",
    15: "xMxUMhvrezGV2XjQ.webp"
};

// Define student data - CUSTOMIZE THIS SECTION with real student information
const studentData = {
    1: {
        name: "Örnir Iofurbiorn Skorargeirr",
        physicalgrade: "7/10",
        karmaticgrade: "Adept 1",
        notes: "Örnir Iofurbiorn Skorargeirr is a student capable of wielding the Form 'Niflheim', allowing him to manipulate ice and cold. 8/10 in strength. 8/10 in reliability. Overall: 7/10."
    },
    2: {
        name: "Seth Trigi",
        physicalgrade: "6.5/10",
        karmaticgrade: "Adept 1",
        notes: "Seth Trigi is a student capable of wielding the Form 'Jolt Discharge', allowing him to manipulate electricity and shoot it outwards like lightning bolts. 6.5/10 in Strength. 7/10 in reliability. Overall: 7/10."
    },
    3: {
        name: "Saērian Entai",
        physicalgrade: "8/10",
        karmaticgrade: "Adept 1",
        notes: "Saērian Entai is a student capable of wielding the Form 'Calamitous Retribution', it is based on kinetic movements and generates powerful attacks via converting momentum (movements, impacts...) into powerful attacks. 8/10 in Strength. 8/10 in Reliability. Overall: 8/10."
    },
    4: {
        name: "Thal'Vyrn",
        physicalgrade: "4/10 - 10/10 depending on the spirit form taken, base of 6/10",
        karmaticgrade: "Disciple 5",
        notes: "Thal'Vyrn is a student capable of changing spirit forms, and wielding the Form 'Wood Manipulation', a byproduct of being a half-spirit, the Form allows him to manipulate plant life and nature. 4/10 to 10/10 in Strength. 8/10 in Reliability. Overall: 9/10."

    },
    5: {
        name: "Asuka Rui",
        physicalgrade: "8/10",
        karmaticgrade: "Adept 1",
        notes: "Asuka Rui is a student wielding a katana, and is capable of using the Form 'Sharped Haze', a Form that generates ultra-thin, hyper-fast karmatic slashes from the user's attacks." 
    },
    6: {
        name: "Kioka Ryomen",
        physicalgrade: "8/10",
        karmaticgrade: "Adept 1",
        notes: "Kioka Ryomen is a student capable of evolutions through various means, and is capable of using the Form 'The Ultimate Darkness vs The Shining, a Form with duality powers, one side is a destructive force born from despair, the other side a radiant balanced force that finds harmony within the user. 8/10 in Strength, 2/10 in Reliability, Overall: 5/10."
    },
    7: {
        name: "Keo Mavena",
        physicalgrade: "5/10",
        karmaticgrade: "Disciple 5",
        notes: "Keo Mavena is a student capable of wielding the Form 'Ride the Lightning', allowing him to manipulate electricity similar to the student Seth Trigi, however this one can create weapons out of it. 5/10 in Strength, 7/10 in Reliability, Overall: 6.5/10."

    },
    8: {
        name: "Akagi Kirada",
        physicalgrade: "7/10",
        karmaticgrade: "Adept 1",
        notes: "Akagi Kirada is a student with an all-rounder Form named 'Jack of All Trades', allowing him to use a variety of Arts depending on what he needs. 7/10 in Strength, 7/10 in Reliability, Overall: 7/10."

    },
    9: {
        name: "Loretta Corbet",
        physicalgrade: "8/10 {???}",
        karmaticgrade: "Adept 1",
        notes: "An anomaly. Loretta Corbet is a student capable of wielding the Form 'Metal Manipulation', allowing her to manipulate any metal to her will. 8/10 {???} in Strength, 4/10 in Reliability, Overall: 6/10."
    },
    10: {
        name: "Midra Izuhana",
        physicalgrade: "9/10",
        karmaticgrade: "Disciple 5",
        notes: "Midra Izuhana is the current leader of the class, a student capable of wielding the Form 'Carian Swords Arts', a Form allowing him to harness karma in order to shape it into a longsword purely made out of karma, alongside minor enhancements to his physical capabilities. 9/10 in Strength, 8/10 in Reliability, Overall: 9/10."
    },
    11: {
        name: "Lysander Stalwart",
        physicalgrade: "8/10",
        karmaticgrade: "Disciple 5",
        notes: "Lysander Stalwart is a student capable of wielding the Form 'Flame Within', replacing his stomach by a furnace. Burning fuel into the stomach produces heat which is evenly distributed through the body, and can increase his temperature between 80°C to 700°C. 8/10 in Strength, 6/10 in Reliability, Overall: 8/10."
    },
    12: {
        name: "Rakna Pyrachne",
        physicalgrade: "8/10",
        karmaticgrade: "Disciple 5",
        notes: "Rakna Pyrachne is a student capable of wielding a Form that manipulates and generates threads that she can heat up on her own. 9/10 in Strength, 8/10 in Reliability, Overall: 8.5/10." 
    },
    13: {
        name: "Exodeus Ryui",
        physicalgrade: "5/10",
        karmaticgrade: "Disciple 5",
        notes: "Exodeus Ryui is a student capable of wielding karma in its purest state, allowing him to generate karmatic attacks and shields. 8/10 in Strength, 9/10 in Reliability, Overall: 9/10."
    },
    14: {
        name: "Vale N'll Rellis",
        physicalgrade: "5/10 in human state, 8/10 in weapon state",
        karmaticgrade: "Adept 1",
        notes: "Vale N'll Rellis, otherwise known as Valebrand, is a student capable of transforming into a weapon and gets stronger the more praised he gets with extravagant words. 7/10 in Strength, 8/10 in Reliability, Overall: 8/10."
    },
    15: {
        name: "Isdis Hymir",
        physicalgrade: "7/10 {???}",
        karmaticgrade: "Adept 1",
        notes: "An anomaly. Isdis Hymir is a student capable of wielding the Form 'Serpent Dancing', allowing her to manipulate black snakes or dark attacks from her weapon. 7/10 {???} in Strength, 8/10 in Reliability, Overall: 8/10."
    }
};

// Get student ID from URL and display their data
function getStudentId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function loadStudentProfile() {
    const studentId = getStudentId();
    const student = studentData[studentId];
    const specialStatsButton = document.getElementById('specialStatsButton');
    
    document.getElementById('studentId').textContent = studentId;

    if (specialStatsButton) {
        if (studentId === '4') {
            specialStatsButton.style.display = 'inline-block';
            specialStatsButton.href = `student4-special.html?id=${encodeURIComponent(studentId)}`;
        } else {
            specialStatsButton.style.display = 'none';
        }
    }
    
    if (student) {
        document.getElementById('studentName').textContent = student.name;
        document.getElementById('studentPhysicalgrade').textContent = student.physicalgrade;
        document.getElementById('studentKarmaticgrade').textContent = student.karmaticgrade;
        document.getElementById('studentNotes').textContent = student.notes;
        
        // Set student image in corner
        if (studentImages[studentId]) {
            const imagePath = `../Assets/Images/${studentImages[studentId]}`;
            document.getElementById('studentImage').src = imagePath;
        }
    } else {
        document.getElementById('studentName').textContent = "No profile data available";
    }
}

loadStudentProfile();
