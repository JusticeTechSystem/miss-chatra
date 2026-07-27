// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRsUXw3zrZe0jBZrYMVhfAQztZ18c4d5QwaA1XTAhJdxjISrYMJY1n68fIxvDx1uOGHlPJ0Tlwjsw9BdmggJtYQqFnsN1RDmmRlpRVaJAGVjfye1vQO4DrTSnsrUNJKGFj6E20DVO7VENtaQH8H9BpoTVpSx4hJ6NnHV6zFIMa16vQM1MHOeCUptnjPKjqvS2FrPWjx0tHAjuwuU84st6CdOXUjESX3vS04xbkMklMgLxE2G2F18Q7rBNLkXBn/P0kCZnXlorLfoVDpGnjnU1/1vWZc5c1V68mP7iYpf33GL4NECooE4d5Ju0KDAtQZ9OkDVwPnF6fyLwMzwiRaRJ2RlsEvyC5jp4jq8d6X7/+PeiWR5cCpnhYIIVXmx5+su7gtUMNSIFprSxxpoHcBKEw7U53tAQ8QZkzjyQ8zc6BMDE25IiBEqpFAlFOuqrzBLpwrVLBPeCIkoWg54whNbNGivbQ+adZI1q3+bDSI6bJ/+hTkYDVW3A9r1wjEaWWBPtiXJRRMSHTLtJEg69M31UyYzGVokfoJO/iSFei685vXv7D0l8WeKiJw67sd/TLokAA3eqiSwPLisfMgRczwhRK1bJ2tRnxJ1PyGJR0zZfsyNsQJeK/C0ulvQfQAb8bwXboqcnjOWWscw81cl4FzpGu7nYhBSyapM/2lDIdq13AtaIlTnanIkZHHXBu/1ChMsVGJ5k2PbjVyo9VgBC16QVvWOJKxLw==';const _IH='59bfcd67425a1dc3d74f1d408810317cc423f109491e03dc41349a7646884885';let _src;

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
