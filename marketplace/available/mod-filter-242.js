// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jiuZfbOQIt+bsw5xndopS7ZMvoNRH6Jyy6VlbOtbzibeAWSj9Wa1wGfoAJ8/3l/G5y+c4Zi55fLON2/3+y1EpBHW6O8+YCWjcKU/0K/RFeA73G3/AZMZ0nHYQ73uPuq8DNFHzyT7q5NzRQ3ohaRFZE4r64V8uBCcuGirzWIm/ZkURgturWjfKWOWtHU96L+0X7RuMFObgjaxHGT8YSuunbrV0C0BiTfesquuW3dO4jmqejWiD+MsGaHLAUdbExWNrfsbjkUNfQ0mv6YuGsA6oA27ooBXfiCJMYq7Eouege0lslOifJskB2DMpU/iw6S66qzGMfaP/l8y6jqbWrPbIznXKfJiJlOVBaKJ1dPr2vc40gDM0IU/KPbAFyoDPUTPNvs9SojhKM89OBgzp3smLOEnekjPLquZi/xx91cAZM0wmHyOkLwa+rb6fptUlImbGuKB7JR1POFew8EaQPMeFDHFWvBki+/t7pw9E6JU5HqTIfjW70LpGkMmx9SAbs75uPmwKVMiYnJm/s/NiOGTjH6LCCIBot+AGm3jajbsmoR5SvrDFjghgDql/g+h8MQGjBVbzzAktIuqvUMtfDmyQmbanT0a7T2H9VXIRXOkdfzEoIv4pk163i/yUuLd1kgExOXQV9naIPbWt/Bpi41CmIjI5UlLf83rn4936h2mYbxxYxHtFCrbSTYmrW4ei//kmsbCY9DcOzmL6g404B+FjQlFrbxZjIqB3TVIAhVRCHxZJmZp3QFquLVaWbKzR6j6FcxcGFULKZrveKh9u53caZ8/mfbYdgmpckl7pUio4xUkcFKVdh/LaqDQJahSKUtvxlj3tkVtImkCNAYKEVWFWEeXpyWmt4v1kFPYykCtZ+Om9RhTPhipDar37LX+1Z9RVeuX94PrlMSaxcZEAolOxbde8w82E5btGibgs0XP/c5gShocvxARC4rifpzkH1z8+ejsnjMcaSMmtGezb4R71MIVlE/w678u+nH7I1w73Y/w9nSycltrOM4GQqhN3Wx8HaWx0S7aYwPPdLXl5ewi5+RIc/7rxMPetNT07U1tu8RsJB0DWvsSKkly83/bCfHFBbDU+i+IPJzCdN8ZLcey83WcebyCd73hj6Nz8BQXfKgCF7RazCxhXaewx+wx/Hfv7xYvaMeJMC7zj08dju3+gOM9ZYdQVe7Kv1xbIIevQSzRKc+nOVm6cjhI2PL+rr5Gkaq7jvIaffJ8pxbdXBC61lMqVRReGbb6xknYUGy7+QzTOZEyQ2fai95M1Cnx197L/9ZVGoTpWJ5gXXTNdxCmEphXuZOJoe729VXc0c8oWoNgcqA+H7BZ4Zz0WjE7d6OfpEmueu1t2I03KQTFPCvwxA/QfPxilJGyIO5b93DcBDpwwDk0O+l+GA==';const _IH='ff13654a1ab982a85122d250c089d52e911e09444bcf15da4b9c1d22de1630d6';let _src;

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
