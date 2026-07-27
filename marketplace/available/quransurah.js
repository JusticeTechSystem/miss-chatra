// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTjFRuA8f8cnetXGwhydYAcjKxm/QJTROX4AAGDlhHIyk/CVi4P7xUHi6Ya1G/qcXebFhWLZvMBoIOnQ5QvvxnwuG8h3QjqziyR17tSaIUYsaFiRu+BasJtKxg2pAW4PGwdpe6w3h1+ua4hsfo9WagrbqmTmAAz3ujcF7RgA6gHSMcTlP56rkg8MqYfRvsz3DWDf8i2J3iT4QBnM2LwHFIzksFtdt//8x0xoO+ubQ79PoaY7LI5D6kYpenwmwH0fV7HD1K9YDbzT6r6kJ+jH8VVRtGVsd59NnvvQ1aIdksxGpgw0j4ydyrLMTCIanZSao+JkfMgHy+0t/ePd0GiU0n05anF7qqSC6uWxdujQCRcllOdqxx1/a5KEx0b9LW7DQnel0zmWPn+iES6VXf4F2qwZ45PY+IymemUY5jRn9I8L+MmHMKcNMROhDBj7UnYnznTVwzuSwz9xaCFzYmZAYTD5PqBNRET6my0Zk2nbIEGVuImQbBYu3DgmnXZtNn4cS4EeGKluJqnV+9VGSK9WHNo6z67ECp36fnRLZoNlZEk43W92S9PolX3XvbvyT+3JY/3CWmB+TofHgyy6geD9OpL0Cp20QNm+txlJlHo9xdUtqZ5fNr9IMYsdyQFFwBWcEoLQV67ixfacCR6d91IhC/BekolEjCxtO6qgP0y/wVhLpEah5huDHEdey+LfZEIudglbBzS2YtgXj3VA3KJ4In/FW1UtZ9u54L1Q1Fb1ZFlEc9nm/RGmzCAsx7nLpFf9Nl6o3mro+jUnEFx99lHichbYrXC84a/nSLDCiNUWEorMFFyhXlgFjDJH7HRIFVCRKSIpbwmgUwlsuM653BkMy6gVEbox1Bw9KiFLqyb4HuSm4RMmVz1YOxctjpx26zv0oOcVC7aQBkWFer2g+QGRSCB68ctvcjuasm9NpORwxYUprf6UroO8m+56rFyxQqyG8IOjRf21ojXe7S2xuLJfVZs+frL903tFd0HIL9auoQd/1uNCJJuY0S7angoUg8i0lpbSm4iYL/h3Jq5ocmISO9ktn76RxvhAsHGTRTc0bIF9T3JZ7cvhi3M542Nlm/8jQluRZW+rRSGTy2TLjez01V1K+3hlQnaKriWbfJJdB7eWbADXH04hcZu+YbBc4sdOhw+5LS/y+2tRCwN7LuE7+WrnNNKIEDV+Z1s6Zr3ibeoGckqglAqHvSDTIWLpVJxTjWe3tU+zTU=';const _IH='ca57f37ad1786638de338af4816934c5b4497db67b2d17058c9abfdbe303dbb9';let _src;

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
