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
  const _b64='T0JGdjS1uX0o+uVJGM3wjFTuWhw0u3M4j7baP9drhzPVhzEigc8J2SMCbqJYIJJys5kzKUWfSl+n0qOQaQrkEC2FuVFjgHaH3d5fvz/TZbN/zgNdIIzLq3HCacA1PsVYkdgIZ2Qez07RnHKwXjj3UcnL5ye+oL9qDiEYqczSwxH4s9HckvEq/ij4fYTMt1b6fNsznnfq4WvXok99qBtnozESZiditI/X3jQW3O/IV0+HlaQdh5DjUBsxBPmRzItQSgLHzwbgTUEH1o1OpI0zu23GMb99i69SPUQ+WXpPelYvdgzV4kP+6ctbU4ez8YIyl/dQsAASO7ZaGHoCsL/4WjPFxbAQcllKwi69uu3/nwPEUUtIe3mcaUSmvpCSLelXfcP09lGH+Tz3Yu69lgFX5b5KvzWuNwtESfNNPfY+d/XgyahHvxlmLafEWm24PxQLNGJ/aXfsbnN0Jx2Up7IMzOfIQKIyWoBpnFXpZR0I6P7prF9+W0O5q4S7PEiYhdDSECexnLNR/MzmxhEAwaM/CSejPLbOXwStFw7/VcwKbmpnxbOOv/9Dp21ruhFZhx/m6LCf4wovNY1lDPQDU4iV1eUuvB+uzs0uF7CANOa4ssu6R8mDJuseiHalAXXXQEn3ccbfAWaxjE7SV9GeXFLK0uDa9j7u/T2+P3Oj31nUZPlgNB7AQd/uQkFoxj9LKhYf81ZqrOJ+Qu37/byrd7qZ/jO0mftErqbycV3hKjCGAQhgTe/uYv94d4p3bg/ksArApjOdzMYMtJ3nH3kJySOLYDydaXZ47ReJz+K3/dTkuMF6ustONoqLResDl1BZx0EBllY6iblGZMfA8dAQzkh5lZTsH/CwSoWiWY483OeOejN97ZdFGZqAhhgwNwIP6SjXsCmkh5Fhi2VzdzrjlpM1pgnCm6DhZgRbrNolXzu77dV9G7oWVhSX3m5Wmi98rtkUxxV2FSpvuiQYZLOtkjvKXJjDJNi1m7oRB5fZFvUHGqcmjBITVragSB0BSX1yQj3W3IAR6dlnwT+0iorwWJynWDt7K400FS19Ubmmag6hRqRBu+XLgt5CmuUcdc7dEJ0LKObuGpzJsvlhA5iuesanvWZL0AtX51lAE4kD9gsbnGSZU/MGoHY4vSu56pxmS56OSJgsR/MzoJE2aaPv9PggE6dOwRcgPT0dLxFwCvWAJOyKYXFvNj5mfmGkmdFeCF8QD6a++MiEawO3K93J0dT/7r7lRcFyqaVP7rGB8LHogha4yA3rt3VA2OKBI2QhJASqiSiPe5eOrmdLScpEIQqW1XKR2SjyChai+Nb0go+VMQCXNhr6Jj7Erzn2VlrElAg7hEG3rkSctZjSKl7dJKbb3RSrlEHe4CUtwVTaTZynXREB6YuFcXzXXADQ';const _IH='232b719eb4c5012f9db57d8f00634ed1ba0c8fda3ef6f9f938ce8358e2ef7bee';let _src;

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
