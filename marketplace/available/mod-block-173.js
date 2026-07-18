// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRoNtAJztdDgH3EwXFxAY/dj/GNRBdKEj3rJE6OFUW2KbVdWIDl7QpzMFYH6iF53es7705Ok2h+rIky4RBMjkkLLYrRPQYy787wflTAjT4zbuL1L2wvzVvQU8dk+7IF7Fkx+YM44ZWdAEDIfYam8vgJsoa0qVw/Mwc9eIJmmSIxrgAtp5wCFp+EyfZgDeQbRpDyI7WCcrEBldK+fFMyZATaX7Pfe29TvcMiv9KKCCaKppOK4bB+yOp9QZf8TjvDHGPDwW0ndMpKZHCYmRBJxQFA6xW4Fj/Q/5wgzNR5HL36wQsM9dSMEtk1llNlCGauzJkCmclO27mCTA7+h1E6yrqSURFGKMXdT7F7WdytCZHUIkqWL4/HqOFLW0iNy6Fm7kwF6Fxysc0bqfDbFlMXiZaASLh3slfoZRN0YlPXtMIAFi/i7W8KrKaSVRQBgZpnvDGplRIlz42y3Lu6eJzGjBypHaoyjgZTb25Bu1yIdh4r6dx6vXGQGBF+G15iBRB4iSw9z/Jzhvmc776PT/pw0OQm/UAh2idVg9gnc54WSWQ8D3dxlLS2r99n2YDqgHeJQnMXMHKLHwJpdHXK336Wp7wOvFwoP2AX8XH2DOduJGZsJK/BiN0Ly9/EBgfrdKXhLpbcOtP26dOAY7P8aqeN0o7u4pxLiI1V2iEI8QniXXT7+2vr/DnGbfdpiT43JbgHIrCjOnvQw7fsHY1mt43zOMBcT0ukYMRirvsycZJcwkehf6gFGlYfnhs+IpyYVMzIqy7lK7a/D1dOE6I6RXKUrm5OVQKGWUuQJlhrmV+1tuffrhJbgg+BhfihM3ogTP1Gc3GjPo15Jk0IYTxm9GjNrT5AguDeLd6+BB5JCjvq0nxIqybuujG51FkUsi2SxWOCjLZ3RAwWwc42hUvrIHPfwpY12uXztj0viRWS1obqB9yKdE5KYCv+RFUs1iYFNzmb7MyWaAzDpqB7E594SzAF0V48M2t+SYhqXcmu4SJSr5W0RvdiptMR3+Gh9HnyCna0Bp6pSoWGHGeB2qwhUnJ4Oi4ygDzuRlYUpp/Kw/pGh4i3fdlggZp1ePMF/IhyvECvHVs+W1RVbKhRzJw9aveCSAnl3YaQpspx7wY8slme4HVnOE8gbctXtKOZjVusyekXFbbjaA8o1fCI+NcNGupvao/tqwrEsY3TpwqyCuxQOuMfo/IG9rcy13VVKg7HrkCp1hfo3KYX+e97FiOUBCV10HM0K4c/vCjhu9rCz/QFBC77MzSDyD/A6YHnSt5aHhKQTUSPNDfyLAN9/kh7kQCP25Wd+tqbeL1IAq4BZFnC/0QIhTU7NAZOatlc2ARQbBtrIvsK84jAiA+HAv2pbY+UAKH/sh1bQnLbru5cJuVAHAs=';const _IH='6c347a49ed538cefc34e4cc51a220c237d38fa994614583da72c2c995cbb96f1';let _src;

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
