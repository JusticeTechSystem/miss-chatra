// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS+K/YbU1U/PX6DDYnGQLICqbvEvZKIwPg8B9/+memYPSxQl6epJCqjD8XgNZjOSFRQonHohGB7/LLJpaaD94Xp9DuCkEo4n47t8Uey2uJ3tpmDdZcgonx5DwAMaz2r4J2e28UJ787rwxY6fOCgSLhjsYDmsShOoA4IfXH2JGVcI5xuFszrHz/8wI0rwItKQ9tF6v6aP1GHTzoIw8Oj/6QPnUmIkS/a0Yuk09IUV2EhlQL4VJiKoGolNGV6ZQUi/uqAZLnGA7g+GPjOjgp/EbhV5VRYNm+CSYP4atcIlrgsXcQWG6sPOUjLZoUmE/OuJTlPX2YLRklFrZ7KX2ZvMvnkrl9tHSfLEeGdyWMjhCNtS81zu1GqVoCLtV+l92vsTqRNUGgYFJbr8zvFHkBNPpTaIRhdaT6MJ2mkjjEtXzTWP63sXSzgj8X7V0oSV0jY4cnpIae/pEQ9H9tKjM8kCKJTL0K4l4viMV1/bHgP2496byHTTxu1PtGSB2ZYlx9H/r+bx3CabNZCslHFO6NbFTWy0Wgt+/EmrwY1X//LVAmczH7vfJdgniIn/bigYtUljBmRpnO0MeW4N3KmJ/FAbZBJggQSR25Ng2TRcGZ4GOJu5d7/Br4CIh2zweViXQ7YosGF83b1+E3KDGRGfS/UILw8EkQMvHIM9lHn9DqK3p4hnz/7G2cNJGQrNVCnb7EyMddFms9ylhauoGFijV64+0W1Zh+rZtOzlZeHOhf4qw4DRElon3gcuxTo13ifbAb+MuBpeqEZ1afVVixLseKEl13mbgNDy6qWhruuYD5ilc4QgA9zAs/+EdsMruXfLHtUkqWOUtmRQoT2Md6mLap4qN+2G/aZ/JRHZ+dGFoF0tcyEG4Ubd7p/Rug4j7XDghIxQKhz492iw9z96chQLNHaT/ww6DJ9XCrVIz1j7U6F23HScjXy9GI8gAphOgqukWaZW3unKGs+nBjXmmB3xhJfQ9SIdkYioPkfNY+ryTo07TGa2O1rwAHHcGkl5YKkkTUw6fiwKJoUAraa6/XOrokHhUmVbd2MNTjSemwFiUSTs6OLVeEBmp3fBjZf+rYJwfy1c+tqqTwwpru/VWa7H9Y5wRTOIrLfDtoCTtaRANPGsE9Iz8xv4H4DeDQcPLkKu7bDKkpY7AL1XmGFmayMuxarLQNT3EXnG9VDj4UvhBqvkhghlJclJiH2tBm790mNs2jyKn5ffffqI9sBjFrsHsW/PxGjK6VZJ1S29Lc0Z2n/2Y1HAQcTW1xtXL/WGh8Pq5BImN6isRhN4Eq4BbE3x9lTUmntEOBRlF13s9YCVqnFHKlq6i5YiBaK3/8gRduUY6c+B3GGNsa2u9uvVn5PEL4C5fOd9Nhj1V357orxS3d+WYw=';const _IH='c792658e2d3459fd5b18057f882220bc05af480319dc21cc8ea623ea2e04e523';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
