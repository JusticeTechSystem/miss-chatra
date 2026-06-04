// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VNWAr+7GSimBsfKlygRc7F6s1iigApERiPV3j4vrB4sYntEjgX6tD7WtqkXIT6M1B2YVA2KPiPL2ELN6zyNINknL1TPtJgArjEJ5cUCuxZpTXYrvrsHZR30WY+lTCw8jnTmzYr09zbxxR2PgNZQFo36VDCJKLxh3Ct+fW4WNY2jbYVyz7XBO89yI3csUCJVt7Oq5qIEi0oHypYHgAPLdXm68wV+eNEUlVvaWLq/wcYmP/pxSBUY3mKgnDGw+tF447QMtjzL1tD4lpayEFpnlzrbwZV0jD3i0d+BCt1Q4YEFFDd+Lt7nMGmkE2g3gpt2FUNUy3mmniCL8UTp+6Q/0k+P8sjIYrEgDNEVW5Yb+znVk7VHo54HyvtVz7ba4mgHyfrA0yaQhBpI07CKUCnmmobFpdduNC7mqx0vNV3w/qlgPPhTqi6SBmcvCufj/At2D+7IBEWOD22SFlNvgwnskRTv5DOPXeIi4KxjTKSDPNgKEmGKYeBoBz6WwsDQtWo1oQ1fycsCVeRLyCHPW20nkU0aDAZL9muztV/KagAjPn0GjNBQYJGPIwDLIJ0ROYqJF9T7JCDh8y/k/ycmWTiUb4pkAiiTry9L058qc0L09orHPJGnlLVkNER8t0tOvl51hz+ydEkkWyOvhYOGkWynKCCwcbC1bVOV0FU6Vd/kd5rlB+n+Pa5OVvED4y3ss78xtQChW/lw8UC2Apq+9sHwVwQmYLGxYYblvn8xFg+8YitJF7L4tAM55Bk2jWx+ttRAuNJEpnOPLlPXb3/rP7wQTIxEtSbYk0favOZzW4K5QWf1ws63k8fc/27jOubJ8jvQghiHxQ1e6lBs95p33/R1kn01WgxShoYx3wyIblRzibuMKU4MQg4yZisqmONu4S8mtgFqFGim4uwTfsFhPww2vCqyjWZsbJPoEecOoRdTpnVyY54CyEUFjLFXOxPeJSSIaQn5puLdsYZyuxE2GwqaYRl+SbBJ9iX6k4trNG4NnFybqaiU76u7912SJh7POPdBSrsN6MgxJRUSJAJ+R6xJKGlHGKcq/kK1ZQ2GDOekwHCObbHq5Cr23zbi33NTjOcbQdxKsGjMc+GCwxe9O3hduVhKNbprjRDJ+ioyDBd0WWSvYxXXuupi6ZgfUTDmZiFLAbHj1n3K3+pPvUfXjkl+BpRmH7/V6TjE/YlXQzMMh+iHJGoEp4DDvAddNNw/jQ4cp/W9E0jQz1dREJmRnFqU=';const _IH='581f080324c505891c3cc48321d8a2a6f5e0e9fe4353e1191b1c9ca3854ff9e4';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
