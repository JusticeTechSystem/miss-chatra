// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hxBg4lJtdH1g8MlSlRHJcX7qcWuX1jrslppZJvbvFuV4O9rMiWdXkSoL1s4RL34oB1ucwHGcEP9453WFpfqUHKgGburospzaTLcHamTf589igvBvLaDlIDyfT+h+oNv3FvhhMqixYxkFR+VtT+Ff2MhH34HMCpSVEx8tH7xMVe15giLVN8VlESoo1xW+G5D8xpsj2umUJ2mhTZJtNe4kds1vpYRPMJM6ybR5be9YrB/4P1MD3dKJ0pXEw5Bs2q2Zr1lRi1rPBHFKD/3Q9BpFI8icLZ12pcQO0/neU5tiYdGhbuPTNx6ktBdBt37lfIGvqCkk3TDLiZBavTIZYbYfMx9GucUqG43CkQjkpw/OLfAe4osYZ1DHLlLf9hyf3dhXzAIWNv8UGvf6zhyhEAmEhfc0yRA62vo99VLlidj5AVOV71WQrqtHg2lOVBO9HgxxJ07KJjxW+x0pGa85x0B5YW6JaN/T4HjrNT83U7bM0mPmnqRS4k4ym6zwelpvpFejh6sm7cuIFjfL7h6VvrwbRbcygv6igtvurBMLiETJIQYJseM0863PhOyEmeZpMzs/NdxZEtOrG+X270hI8UwEnX24DmxKr6eohef0afVNcH6SamnJZpnpKlns17ZAt5ly/NmnVrq8iEQp9eMt6Y3ZGEYOV0L7JM7/gQSSuPJhlhIXWzEDUXVfBi/m2LL9l0JO62obxg8mynBprFE8lGgwSXgviyE1glNIBLTknqrGAJDqybPe1XXxl40dQgcmQtA3RhSq+U49ND4aG0rOmo+w7TrEJHBFGb6YM1FAaLtqjZrq1VHb/JbtWUaopFd3/4eZGQmV9Z0ZNtQUVISGShw1egVTVJrXTzD7YJaA1jTazdSX0sEYrIbyviZiiIzVQsWmCrfgFJtJ9cJAeAGDnvMeMU5XC5nvmyFGDX2gkt3ySHj7/a5Udhx/k778csDIq3Z0dkuvsvVJsE6C6MUK0n/2fIF7il8Lq2GX';const _IH='6f5aa3814b2758083ae0b8b5274c0eab46af73073c30334bf57bd1c2e1e6dae9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
