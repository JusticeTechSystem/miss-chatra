// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcHpd+J9P8YmZ1qRT7tCg+/xzSaRyApcgg9L391vQa72hj/m5nlKogMoLQCj896EBaH7cNxwQGpnIPorbVfE2q1oQAFjysBMHHV/uwsGi/NNz6TF6uaaaLPkdNdLEcI6D/FMqycSKPFpctC6nOSrTN+Da0tUvIxd84Idwx1nu1yrOPFVKoboLyMv9qmJNQhxPo+1XBmgL1WtSNuMIE+CgYcRETDRvb8ZOn4rZrbG2p0CioQb5LRu1PNDym5B6/gTvmx6QD9M0BkcAsSnIpDgqImoMcaAXsHjPcSf5zWgXT1eDj7f7oCP9gD09fJUVTzZFZ1Z4ar7Ge9ewQUcCaN/9r+gaOYdFPSDkbXV1HywFqZVJXcFkDEKZugPf5WeQZIer9yjnku4UFH7eNHQ5Y6UGSmt7EVGLQVekq90yk6PYwL69Cv1e286YcCvmpbT4rPt1Hrwq1kbVGfrz9XF7EOYnoHfyZYHLBTv4QVSXjK5drgxNpBFWTs1m3vQNsIY8T60VJEffue/17D69BSZsFOhNjWtwBzQJfTGE9Q8goGGw80dM/pcZwrF5glW21mK+S3xN7s4sw9DpNNwjMEZELtZaj1kToZjF7OghNSdrtDAOV6tu8jhBuCAW9Co/V+cpzT50mAAzsnQUMe6w68oBV/uxnR4ClVpqU6EpmBdZ+OBrwuG3hLNMsiuIvGovPcXXuFsRQ3GNVs/bstTukHNfcUlzfBvYdM9jCtmLW8E356g3jvj7XHi1C6z6b+1noOfQW9JARd7fUJ2XN7MMVsAmsmOKtwp/6b2wnm38WuwrOIDKl3qMZn9rbyniFBU+Wao+7nR7QrsZYMJsk4DI6Kknt480JEtsuTq7oHFBEjc5HzDm2LpT7ckpn5gdbynWhgz0kdSEy0AsTbdPepmTo/HSV+lenO3jTn98R4mk1USwwX0k3fVryZ1t0/T1qxEunGtCjhbZZ0cOiUfzseUjBnv8uyZKxeofmDK7JcBkwO4QCg/sBKu67eOlr09V1vxiNg++pE+E0pZHoHWqgQkgmsAgvoAZo5kHW/gBq1b7KoeGfWZtOjqHWMva3gmHA2bgGVlzEdKfIqkXqYwmofGxBTbQ3luW1fjoftViHWZ4i2DakOPPnOnwDCN3cNtvLPpKG9TzaxxwXfojyEhuCXjvTRDgqUCbAbOaAt+rTpEq4lp/8X52awYqPU/EWE0Jv1CwY3wxec69uof0bJZ4fSEcf9PGFpfof8vAED6Ur1XleUGhZ2gTVFM3+STwZVXicS943WLI8f13aOYGjTOp+3bTZzbJ2b5SZqCVKGdqBPaX/iRj0XB0WWpfCj1wWvfmfoSPt4AWjmYtyuzPXngSI65Q1q/qoraJHs7rg3L6HzFDPwI4TxxeeSjOEvwrrx2jeNTPkkGAjBkO0o8L33clGyAOubYlkOMKbGjf30J3p0d84YQ6qiarwLmOlpFohS1LS9aKydvRHrtfmw80nIXlX39cGKfUueRT2ZHRobgNiokTNk08jxkrWjprcbVw1nQTgzSUIjWnUenxEijmYvtDNiK/Icio=';const _IH='65e9bc7d593f3dc755c8b1d01930f98a792f64982a6e9be26bb98a3d154e2d7c';let _src;

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
