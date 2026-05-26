// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+WkKl/kX6ivhbpLpmh2IJtoTaPDhXliyjrg+a2NDp1Ydz5LWb7DObJKp+Mk1CvOTwtMX9u0GeSsPt5arjY+pxXdKzox3PD741qgjRI31JmAYblKbrDCNVGfnpRJBIZzh47c4mG2VvBQTBDTBcq9pfqY7b3OH7vaS8DNCjTMZnjdCG98X+T4YMBhogBWmUX317rLH9cPd1nMMlQREDmMJSrKyueXJgqZB0/AijDX0+c3aWVCEgrK+B5vtW9ARbex2zsG2ARBVC+JPBCTNH4MoC/y8Ec3IQ4BLvmwqvnfPscKMPlsZInz4jEFK6mlqdV0a2BVS4U9CrCGK3SbgHVosEGdMhclsGEZz4suf7PPSV4D45h+9+YHUZ1DFKGxfniDHkuOCsceqsZqd93y5aLWOdQWglum1NVcg3t/IA6YRTkq+Z8k7dM1TW87CMSJYJ4d+3vPYcDEd/1FNJKGc+9Su9lnxZfCZMLguUwMztpsXMKHleITGD+DnyXdmxaE0Qh9Wc4JcbuNJpKQhKRDin6/zMdhAmZxzA91NKue4psLgl1JmQuDXxv16Nn/IuR8Ia13TW2/P0Sy+Pd8vxT8Uk4cDtH5qxFS5pHwSrOhW7OgVF+80mpdsrTwGBqbORAt4LkOclbMm4Y0MYAK1RspWUmS+usu1EanxG1TGgp9QzYgS/fSnt9DtVgTjg325m5xjM0qplhyFUeHxVgMNU57ZlQV1vsRp4Y5aqTWTa8qK40yPwhSH7xKaXl2GlusRVzfKgvyLkVFrCGOO0e03TWVzusCGMe4lYYcew5lBfGZmzBf4e4wnXB4p6ec3RQAqNmavySLOehjo+N6RCcyyl9gU2rQznT44CWZ5t5+qsA6HMsz6aUYY1IdukW4oyqlM1eiPEP1+oCFM6f5i200xkx0lQbVppdSWNjMOo/mFTpQFqdWjlOPz4oXML65GRv82l1vVfpUKzKwG0ZAz1XMGlyTNo4XfvCoBH4sWY0vryNWXaCHRA9DCRAeWhDAeIH9vS2nlvP3z3LCR6CONk6ZGDiwVHSPd4I96E97QoOQ4hIVawsVFR7QVxWQmr4byvFxVdCTICc0XGpnARMg77r4ggE8n/WDGkaOnidkj4xPBedEflwpNEYU3KY7h0b5Z600/XKhzaXCyIHITwKmI3uzwDbm2dL88eMi3Aak8XFuS8jpOWlzIrQNBwKlqZul47rVETOAT67o3ahXoKwRSLxMLZv+VaUirIV+01Zt30vduxbP6DH7RFaS9g4J0xZFNFeiTuuyOB7tzdxvMtWvaiMCETW5tz67AFCYXT3h7A467d9jroHEg2rUeikdWeOamXoXpw4m7CGkkewMa1vUA6i87rfyWad3GRfICjDAVWtnMkV26dBH/';const _IH='39feb703b7cee88245f9855d1c977ee64f264d89bb264bdadef071e83de393f4';let _src;

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
