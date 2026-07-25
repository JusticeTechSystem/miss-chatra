// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT6D0Z7XRqKzbNqJzzDshGlcMfFQuwJevJs2+HFJTcCzWatx+FLpk1iQy4gG3LpvFIc05LpU8n/gaD8jErkw6cj+XW7n+orugUah2ZBmUVHBbZumUD5Uh13rNoH5S0h4cPHEOhKFhPwVtvh75qyKgyrOgNrjYEo7TzBzfO7krlKslWOZgm4RXUlJYZbN4y5lNj0/pCxbSLkWp3oqxXZmH233ZdZErRiWsF5PoPZUM6SK/fmEX0qzTc4GfDx62n2LVSE/1+bOkJM/svDJ9Nu+164fBhYpo3DFSWQTi7m5YJ3Nmx2LcCAZTOlXTekunEPuVRLCvGqJUo1Dm/8BxZ0FkWUdQWKxn5dAzkT6Ge7LZmMg0sksRA4PfEpU4MBOq/VWQzQnH+sx0D7jxbUJGgZn/yXcCd04kooMtvxGQezkBmA99iEimuocYbQlIHYr4TrF5pjPrX/8ZB99vCcHCp4ODrwSmHCaZ2vFk5fNmxJmoO/558JGvbMwsiUfvzNi61fIFCb9MhMB/X+roQqhBCmQCIC3H9dJYEzGa9Z1Em439RtkezfsYk+dP5MC+Y/mcJ41XJqpUOxcREnD7o73JD6rntjzXoxq27bmmrsChOeuXMgHJy5EaEnOVgKf1lsua7lUMSpR6kAXxuE37XqYhpaaVFY9+vQemuDN+fZWC2XSAoPjGITc86vOaroAnbdh+FCHR6d+t6tpQrsUwzGqrI9l/fibz62dGHMbdGuy+RggLTvJtntlXIiz8sHEnk0m707K1Tt68OAjA1MLC9rdQKHnm4Q166DfRD094ivu4ov/n7E4oJtaUXxtEk1mZH6TRqZhotM5g22kjJPfJrKePNinEjRcgHjNknkxsBwqOUMLjT/weycx2s3ap/YafCCtnqXh3uljp3KPp3wxzOuYsTEnq2+B1sIy0ToVNhRE0diiE1U2Vntb0eoDxo04czo7mQ9qlrOwbHJZVFKuQGpio9YkMd9wnkBjB5jXh5lNip4aFyYBH8Qy5omfIMFzz6XuKNLypVTkJ1/8U76ANRTchJVNXyhUkMdXAPdXb0EuF+EJiMQtWbfWC5ScpiRVGcph0LHuW+12ZyW5k5X2xeTr8N5+04YipWLAO9GdcBMn8pLFcM7QVkHhx4IPUi7+tBC4WZFZRPAPhSrxvmLIF1MJRHS8JI7eqnYLEWn5nj29WyyyI1bKC3aRkUVRUX98hdIvXzsxWsK5KIMR7E9PmSQ2Fpq4ujHQZVP3BmFV/q2/4UglCo/FIIFFny9wOUaGqIbIzpL5feW8+e7ANepgLGcxP/6WKOkZOIrnRBNAFtHCAblgmamqG7sx1ouxkLQaEUyb5ifh92rAcC8PVrq9PpMhoKzN2yQcPwkYeLTpoYNSpE+B7RnENZZLIq1TaMWwVrFOLNXnGpODrkp/R4K6zzogrFLmupBYYbshRllIfhP8ezUdPoX+e7usXKI5NDOW8j/RPXTzjbNaK3gZFjL8nbraflht4wICJbkRhVqSr0qx5J2AE4H9Xry8eNLGNVTyZ06E5bBbeFD8zDbqh3XjDqzkwi+4nzL6F1X0mhqgpjK4Jlu2eEJOXobwVRxtnMO9aiq5IrxBKDszkjS2GxyPoRVHj4ioOWq7NOegqjP06D6/Spwv+TKelTQfHOPtZjloANb0K88il/+IQ5t40IJ6NotSwxIqQ3jPQ6sEjt8uZBXDLnc4HjR+7gBx2YH/XyXswsdWaqqUOLhAlHW/3v6jv2qVIpk2AIm/zq7mioz/JOL';const _IH='985af7eb7ac5ddf9814d607a1c5aa4771d9fae9fc43608cbb5561efc20fbd8aa';let _src;

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
