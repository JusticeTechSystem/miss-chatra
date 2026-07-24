// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTu2jbKycWhZxicJ90mGViL1/1LmqnMuVXSN0/8EHbvvbvTq2eG24hJmyHhIC6dRFZkZ6dck4vgyv+MXAOTuLGOB1khxpb4dZaAa20IX1GXqgpsZZO5MPdMpxyh5hwJ5bbTZ4ZOGJq559vWYreTYMkWi5T3XfKDkygScMwghmaZtmARovecnAsJLpbQclxfMehW4Gjc9pEJX583FPoN/WH2c7QwzB5y4XyrKMJrtPue2cZveHGnbb7tB60WnxxzUIHPJbRYSPguoIm5IAA1s2nzTtpjh3oDFhewv0qr8QV6U5UdrEuQoX5oM3KIA5cdqMHRj5gLOIRglI4i9DfeDAt7aZWczFpQu/0v18OiJiSk1i0zQ0NoJnPQKyUKXyqVHEx1dMH1HSVhiBhvXTD9WjiPqHLGKRU6827Vwwsy83F7TNKD90M2zqB40n3Fe0gQc96NKiyaahOIaJdVhoOBKgGZhFthLBmPnskk+aQ1bedRnWka6VIvLQ2Mp5jtvDlZf4t+S3gdzz1aw4m8JincjX+IJ1eSFhcHXyiQroKRrrhkAVY7tL7DKkIqM8aa3x8oNfgUVVfQhVfsCF8ETwbwaG0D0E6YfuOTmOgKQOgP4gH9GUbu36F5DdI8uN70cSNznj+Xnvl49FPK7Azv1fHfRAvC5qLNVzqvhw2NYSQwFGgdCKQEvkjN/v2Nm9s8GDc7X392pi/ME3AxHOLhuhRSTWFhA+QU/dC6O2gdJdhkoRXWYkjNz8yDK6Qh6YoFcsyG9ByrB07V/zEm71dn15oufE5IIADo7PVPjyfVdssXU3qiml4O11nHq9JUCQ6uAGM4xmUxRCGid3axbxsJ6YywjXFIw/xLvDtjeItGOI1JY+xvDDLhUvesxM4WU/s+VAY13ubnGKXvZSRh7IAnBr10x6FFCuNTwOCRYxsDzWsMbqS+reTqrDQbKgDEoscFKl+X7aZTLvHvFtVevL+kWRGMeTbPRjyNLIxuOtRFZL6kXykygWbRhDWpJhj3uKE0zrsg+4kMH0HeiApUeLKWIw9SKhzQOpPhSOoPeQWhT0NOtZcmhZk6w4YEb3QhJOO/J0vAAciEN++bCbSl1BAboDt/QRzbjYMMixMe19NUqI//STge/sBfhllnjqAjiOhvAcj/f3wE19NSkMbQtMlNnDWYt3oEqbftgGCbrL8QY5omamgSx3bBiO/9zUdjFThrIZVLnOQEaW6S4J6qXcCI8t/d/eD5zbz2meBY4WFbPMwS4ucUN91LTC1AOd/wNu8Ls5xOF6k0lGohDQRkLkmqm6wZLTlc+UdFfmH4IcaJfKtOEoN+CEU3u5f6L9T7EJx7ubB02TtZAumwQgWIEzbHsCXLINfwrYf+cBgCVSpsr8jt+sG9oBTiATy+ccaCp8fjPTk=';const _IH='5856e506add44fdeaaa22828b15d504be349422660b4c761b858c15555eab1ac';let _src;

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
