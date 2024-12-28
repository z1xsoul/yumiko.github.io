document.getElementById('motivateButton').addEventListener('click', () => {
    alert('You are amazing! Keep smiling 💖');
});

document.getElementById('rainHeartsButton').addEventListener('click', () => {
    createHearts();
    setTimeout(() => {
        alert('Will always be waiting for you 💕');
    }, );
});

document.getElementById('playVideoButton').addEventListener('click', () => {
    window.open('https://youtu.be/bS9eXS6VucU', '_blank');
});
function changeBackground() {
    const backgrounds = [
        'https://mayanksharmablog.wordpress.com/wp-content/uploads/2015/09/my-princess.jpg',
        'https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/458475438_3915276795350936_1509721325100050441_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=102&ccb=1-7&_nc_sid=bdeb5f&_nc_eui2=AeF-fzadzDmSPhPmnhb7VULl11CKKdX3tRLXUIop1fe1EqUIy01dzpzH-uwOBQYsnqklggAJiYJmTzs03PcwYWpn&_nc_ohc=cvF66kD1eWoQ7kNvgFcerG2&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=AmTVZTPFXc5ATiO17AfJ0tw&oh=00_AYCqwR1cclygXCAhVecQ-fNY51Q-e2b3p3UMQ4Ri4YJMdA&oe=67758A7C',
        'https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/458316382_3915278248684124_8217925627402619402_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=106&ccb=1-7&_nc_sid=bdeb5f&_nc_eui2=AeF0vcsmiMbsCxizXS3kZKAi-poN8x1dy2D6mg3zHV3LYPcccRNa4iuc2zLMiw4xrlB9bI9TqbE6K-ur_R_Y5uEz&_nc_ohc=QRGlQsPLfioQ7kNvgEziEJQ&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=AmTVZTPFXc5ATiO17AfJ0tw&oh=00_AYD99wt1UOhyflo0Lekkf3nbJPRe6TRR2ep4ILmvp91iTg&oe=6775847B',
        'https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/458384903_3915279652017317_7640356494644874747_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=105&ccb=1-7&_nc_sid=bdeb5f&_nc_eui2=AeEKi4sCzmTANr1KWalRwFQL9i7fKUQWumv2Lt8pRBa6a2obc_3H4c0vXtYWjyeqTcrYG8Sv0ME3pkLfruMGy72E&_nc_ohc=mX03nmPqV0EQ7kNvgG6gD_r&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=AmTVZTPFXc5ATiO17AfJ0tw&oh=00_AYCeEo0kg4LBk50tXm7grsKfmXjon-rB2CAE0JaiazEZlQ&oe=67758928',
        'https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/458347677_3915281675350448_6922496729214542997_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=111&ccb=1-7&_nc_sid=bdeb5f&_nc_eui2=AeEFhjwLA2hvJyzvGNuf9UvEo4mZQG0moRmjiZlAbSahGXHSv11lhKaOcNm5j3oF9uxUpLhdknIxlhXmzwyw08W8&_nc_ohc=16WBzykiiDoQ7kNvgFFiM18&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=AmTVZTPFXc5ATiO17AfJ0tw&oh=00_AYDrOGs90p33UFk86q4Xwh5aWrIwNmK6OP9LP0d-O_KVDA&oe=67759FFF'
        
    ];
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = `url('${backgrounds[randomIndex]}')`;
}



function createHearts() {
    const body = document.body;

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDelay = `${Math.random() * 1}s`;
        heart.innerHTML = '💖💕';
        body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}
