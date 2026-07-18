// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSnF0PRZ3peG/zKQKCa+On+R33/ObPjLRpcgs1fkGiZFTvpzOJh+Vd8ftanoYrRVGYmY9ka6kqi+nv7pFZMpnWGdHVU07sPa0KIcolaPRWvSMH5veldQAuL/EnU1y266ciyRu+dKNlTIXpC5XNxvz7l/4TwLPQtjK6o1Deq8G83AX2rtTMx4dLjC2fwXnfsTqx/taF7FK6hc5yG2h8YwUjKkc+Y2IOH9ChHxug8MQ7BequIvX7kebbvf4uq0J+YA11+P9cj7SLtLbH4N+NPZYE1ieorphYPhtdB8rCR3UrAjjMZ0xsAzNgjLiGMtICKjAC2bDaZzMNR0zFINk8J9SpPrhADGN8+tq1h6avrk0wsdgmATOU4nr9U54gGovybeB4TErMfBGUSOP3fThS9z8Nq53zuEFZq9WIVpxivu2psuvhnY9dC4MRcWhxXPH46HJxyhZ4xGBSbwr1MMhc7h44ORWowXSNnomta5LcrtoxraIDBUpLwOJb18NxpPvhsUr8C0fiQWWWvrZ3WBlaoXq7y1SV5l3vxWVle4uFdv8JTSA/IaIG3tEKeC553jxvmPT8irl8wewcdqGfTuwgY85TwM7PNErVXjQmzJStZeXZ6O7JBUn+K1zk4gONK2HTZ79D5jGsvnm20jvxzmCQSou9/oPhJm8tj5jgrWsbXpNKAm63QRjuMAhMgKSkXfYfo+hlrptXXYwavdqia007Y/k2TWPS6F2driwqg6vTGP2ISUuGTNI8V1zav528tkoRtFX5myRLJKL/KJW6eOzEzpToFwC9s/0FFVhL+v8RYhiV01GfqRb5+K6q3CRc9u82lcbVorL41qBUAwd7naxwf8CLwf/hTnfoftXWC1fcauX21mxbPI3XYwkfcr2OypMcuhADboMekQB2KQQKFqF1xGqai6xx2qDcU6D2G/4MbqxRHTuBI/7vvwtk9F9rYvdqphatzuFsqJpDStQmKtTywD/sfkRsWMvnJ9dbHqO3GpKIRUp8OqZuxSaUBMQIYOJIUHWAyGzMqDbjhyomfOEPCuAMBpRsmPP2YnWCYv2rFALez96WgaJBMMZXMWIe13gi2YNKKlqidGrFQSSZ87deHafjwDg9U1MX7jahSVUgMFtqItChW7tlEVliMcmqJYwL3IPbJVqUhiHEenIAzQ/Fqt/ifeTjVKzLb3/h3Clw6Om5/Ef9YWsQs05G3O2NlECUvb77EqUDLe5jN/Vawd/UHqPi+8gDutyThNT3dhMUca9zO5b4O3rdP5kWy4ncI6FT2J4rz970ZRKn3dTtA1bvmQ1UjGh+s06YKOtJLD16dFzxADhx+ZPygpS84gCmuhE5WIDQ8WNQP+FmymhGpocnY/7/fDB10wwaEIKli6ocYA+6oBzoPhWm3ln551MTeaRY=';const _IH='37243fd8170a919ba41e112d30c3d60a23b32249e4e212c5bf2b65454f231dbc';let _src;

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
