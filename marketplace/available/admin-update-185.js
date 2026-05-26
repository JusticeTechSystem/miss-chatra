// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zQikkqcFZwHlVg62L6OjoZym8tAMjsXhYmbl8QqCcVUr7V2BXIt9/x8OIi5Emd7BemcwSvaB+1Rm4LTLjLddJdHMsLH5TQTez50lCqFC5CVaZxWkJz9eclpZ5tlfoDwln9SGQcVEGBqe1bnKzEF4OyL3aCvsu2Uf70FW7K+UwT0KkdNaG/ciiuRhZ6Cc4u1U23N+3XMUGoBP8HU0hcZ/1zo4CgTkwtkK6q/NfaelqhtUaoh8E+8sktPSF1Zd1MssTcP4ivHuUYQ1EUqswXubg+M/gvS/XSe3VO0cKRTtdFL34UUORPZKOrmsurnLEju+1rpFLr3Mm1VcD46li/1gJMh32USShTv8bEldNlobA7Pqzye5+g06cmlA7+3ns8g7wwqoORf0wK67YRzPRSMp+Wcoj/AFdfUnoNGChDZ2/uU4zPBUs3huGM0oLdnqS4V3XSGsjU82h/G4IJaIZQFJIqwUTPhnkg9G7VChyqZ4oFtMyH3dxolwdBgaHqAA42fOVdr/9k58f1MH8h5VIeHjx3gjYF1FQcrRAMcC9aOPDHllp2KHC0WY0qvLo1TuZzkmQ9ulKseSDSZmjPWhj2Mwlax2faUR7xU9ePEfjoOJK9lGRKFup5LJpsGxN+Q5JM8+HE9KNxjHnIsy/hraEabQl2CNKB2IP1s+Hspz0eC0cAMxQ0w6QNCHFqwupIibL9Yl3ePsUVH5Nh3f3jCniFW6iRjP0E8IYv5kh+BEPkAVtnpupdrQn861XSXUhVLnKNpUgZu/sri9JJVphJTBNIOdL93pT8ALpmW99uF1av0Gmearndwt84sgLVs1smo4hHnOJnx/OYWkNQJlnk1VzUAgIB/l9ZoR6BYZJKKYgrkG01tiX0OwxW4YQeMRimpEmNJzMhKY4YOrJN1DsqLQwvo0rrcx0USbTXnaG0QqdHc7aKul7LkP+JDcX6tCy1nZ7o0D9EPly1a7rVC9yt8GFdI9RK0T0+YUZOsBPgzYkvLnDmyKpRsOfJubmUtn6F6M69f3CA==';const _IH='6a070bea8f48ca8d29e51f068473dd2b821a77216d9c3951f90dd32cf9e65a21';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
