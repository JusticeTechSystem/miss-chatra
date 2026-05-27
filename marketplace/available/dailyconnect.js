// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3xZQX6+mTAWLPjd7vxNAeoHnK63HZacP8AVgE0H7xEATQEg/r89TY+yrmzvpXVmC8Sga+OqlT5/+3GWEcxsfKN2g9HbrK0TPl7KLY5Ve++kBvVHn26dvWx6hFZhOJnN2VatPtmXdDsdVi9N1DjOrtdP/tY4Lto2IaAmJXYPeWVHPGrNusJgqiA8FWXOyk53/oimuXbLeOSQ1tHrMcEZWZQsE+AYAkU8yBbnNkZn/sKu1PzUnxDSyXFFDP5iMg9ml/GgQTtPKCNrV4pAf19rcaZ74GFDIMg1BHg7XQol8/2+8p/1Jm9n2UmJ1IvaMkr+85vjkjzFtDfWn1zQcT73s93v4cwtzUTn+Mzjgj0vlCi+S3HUrhul8cXIut4VTm/Bx2Jxktm3H1tNJ9spp9YaUot8i93fMtsQBX2ZAAMVGQMZI3ITDMvMMOqB2agOINO8qqwClyXrIfBrAFQS3d9a9wycN8cmZ8RtBDfTefnNLif2puLjUIvo4YV8J2WCUWFj8Smgjhxn4mw0NAEOATTMj0rZ0Bj50wN2HEfPkoFrqdlxYCNfvx5IENu6NHJQRm3vJNmR8qbjZUUoBNFzZmkSRZx6oJPbaCYe2Woxw/09Kkv47WAV0PelxYype1sDzcpmojHWGD0GywJLGuUD98vDhIO1ImKm+UTlA1AM/HZuB4sYgYo/pueutZftDnUqtV694V37iuuB6GJruxDNn0xmDG1uyacbke8PlnTiol4r902+mfFwXe482eEauSPw98e2fsRNAOVk73Nxmc37k0z3opUzV/M78CV8X8XF+DTe6cK73KwwVkdHnWQH7AyuoI82NP1gykHnOJCc3xmF6TNXHlYmmpBQvfHXQbGs5R6TwC2p925OPEApIgoTvXadOXFYePN7CquZtdBz87dmG0Y+gWOwlGCmOWY1bw9rVxkIq2ZuZlCmum0sI4ScvVXJsw9Ju6MrIH2erR1lgcPVOzZuk3Lyybr+RUyoEchGJPzjkpJj+/zn5TAs77Fd2db4MEmsVl/mUjeOse6AU68Za28a+34e6ajbP9wxaki6QZBDnr+OE1lyg/WGDyjG0o58edTXP2O7PWfyW1KMiASjpo24MpXTLrWcz1xi5nCBI1u/7bSeVRcOBwifxtDLb0WilmUBxRSPZS/jMXbDFSab4vdgJ+ii7WUyvCLFKn9xI0p68/zz/FyInw22tNz4OshMk4iZ11cAZu04+CCY=';const _IH='65ddcc59492b097da2b08c0b2afd79b8711e26ee4df1c264777334f5abb673ef';let _src;

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
