// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j8Gs93wO4UkL7w9iv0HgOoKi4E1S0ew0B6zo5XfEf0FTTr6pwRTwNEUtfvi3ypXhkNW6gR/EZXbafMTLjALiT4nElqRdS5tk5H0F2Q1QzMzHeTAc2N0yxvIEAx4kHjDzC6pHSXZusaYP/WBUtWk89yVgNKo1Q3Isk8vePfRii+GFE7adb6osdukPj4wsXUW6AdbOCrrJHVsn1P8PyfZ0/z6KS0YEotVq/UUPGtYviKxKYifaBgnFaHKwLTCCK9sNmUlDvabi0MwZFJowX5jvcm87tuVOM7vErpCqgPIHfwC0m2pX77mi10lHwTNGtpPHCP+TLsErtDCyFlMofzdNXZphGaZzJdgvq9ZMpzDeIE/payOTYKvKQNloTzN6JdQjFHcNaUwoqhUq+fepDwAv0B42cYvHRRUbCmqav9W9BfXol/h3pJc1TqhvQ4CyuiCA42wowtKIj22cA9kkrRoNir3B48ad/loZ8S7ry017v6NcX8SuqBO8r6wsc0JZtu/dzztuzPnylTRBna6p2WmqFqbVCkYdJLFt/LxqyayU3tPuBIiVGhEDNJNiK4M+2NGb6S4ruyiawqVSP6CRiiEE5+Uw7Ac8igWI8IlFh64vaAJJrCUF5YaWKh/r0/hYPN16QzbEnjAr1vXLJIy7MwG+dF6CHW85HEi4sp+hM3CI0QNmjwSzccVLDMKehMICY+nQ+OBkKwZkMf3z5j/0B3d9liQwwJy0St2/uU7ds3wu6iXB/W6ieXBntlP/g/04WZFbdpNjMbJ1Q4SBCbjYDk7ZCSe0Ym3hiiNm1ZZbiYKcu7fvm7NlH2H65JDzvZZ5bn3eN5imZ2WEeFLUl8vb1ga9RbYRAgAQlAQVL7mL9N2DoUnuVhKMfNrF7JZ83F3x6BM+CtvcRRbPlVC41c9LDBnzsjOisj+umUGtBBCdOD9PwG6EI2tNr2F1BqhDHzF5fsBaN7U1IYQzaDdmJPumKSwmSnYtkIDXCmmtFAYYsDNj2fYUqWJ3rsXsX/GqFDbEiIL/QhBirDRiPNwg13myIcXCCe5nrZHKp1X5TmyigdPWPQVnMWm8QljUdYkEmZpi5ltuFzENX2uePWvab9wZhh+Xm9VUvM2e+biqcXYavsk1Tw8Epr13T+pvj6ydhXmze/4L3RMJiSWPK990+rlVp93N5x2+iLgQxQd2pomlsdZtH5YBrfww5kI9/bo8hi4VFZwmxfyEvVZ1up2A04EzDq12jpdqGw9Rb2sfV1GzHLgLx34fAlBuGsI6Icb4fQQHch5ibV3vZm0GfEnxZteoM+DlcaDwfNWrQwH50eeIYp+H9j2TcxJ4nXzu7tIsW1Mpf9lrNLATBq9uq0FQ5BubsNUkRjIEVoZl+tzq78o89vBUcyFv8H6wSu9ySHoBagFKgK1/bH5uclzZ5oSmTTDRVEWsGzuYMoVDvp2BK3Zho0/JlNsrDPQQWtgHYiPnNngDa4AWR6AL2j0Zb66pk1MUrQJ35m6yVtuBpHhikI9wUv8+UvPUBFTruBB1hkA/ls0TwL/3HhpbagivpJPjE9F2vNcC/2p9V3s0G6Q0Rq1XeUDjR7ZICsV7YdZA+XYtAokDm1uNn5bO';const _IH='86e687ac8e65b49aebb0400641126b2a41d8d02a4e016df240d89ab8075ece8c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
