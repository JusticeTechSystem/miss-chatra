// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR8+iRnLYFUoVLjNdNp+8NFJ8u5u4Atz1++Zc1kA+wYKgbWaYxRAzqewfcOL3HTro6+7zVijuqXvP7jag2L08tGGKyxV/W5HnMT2O4o3/O+lgxCBOP8zbppnKHZpofjKEBQ5V9CGYfIL4gJYz3mwy6Oza+MPWYgnl7MxtczD2vSxiw/Oz4mv7bx/ykmpYa3hwhjxmg8Vsivsc1rzlOgJtjrhfypUvUMicObvImulcqqD63L0pD/kSfa3EFITf5quUI9NfJd71tWjWmIT3bcAPAAA6kP1dRa23H6x4YpdPxDEmhB99q83ZTgnSL7okVb2W0SBPfsbdWLXGVYaVmfewIG8HxLJdUdSTAeh0ZqWoZe0dCI0esbDOTCZUhSHkTLpXhVQVSqDlmAQxPX9cqXEO89LxM6Ys+qh0HU/sTyHDqpJQpm6gVXQf+1J3EXHbUVKlMOsMtx4PQ23Ij1AeFVT4IXP74hm5Jf20W/NtYUgqRszaQVawaruf22v4/9RNt5jCnGSLG9iZBzHHZzYo5FVPbhsBzR4emds5gb0SO5PCROLA8BkCwcMGtvxea+1DpR3jUIHyfnmXWTxh7EQFZZDTVob3+lNuxNTs9g6fNPajXjuJwfpSWfT+kbll+WmMbRTjvpoeAcK8EihblgHC+iCo91iX76lTdKAyGKYR0E9OVE58sSrGfOO6C4OW4EJP3LFSlKNE3vE7eogmWxhvg0ZdRc0G72o3ogQHPcZBILkAsDtyovBhgqyLEoS4g4Z9FePMtBNg4Z6XUU2UUsBTUVnpPC2SJCK5i9UoiYZwCa8n1KM/EQXwM0VU7KC6ZTmFPrnPOZB6YZ12oyZB+fxonKop8zLBpxWWyB++ziZRAndV+fGzYLcvmOa/ZG+oW4hDuozFouYf2I4bpjl0DG+nbxhvvuc/zFvvEFei/q2fopFyJvB9yC2ydp9ae00V69VLcyVNNq9eIqV7OOBrl4MqaZRnZ+YP+DM0ieUL/D1PrVKd7YX8+Yp4szxsPIRL8exIbtUcGT87//TQg60JF1mbehUi//cBqoLCg/WeLUuMTa69m6aJr0Pum+XL68F8KJ3I8jIRWooNEPiTfquRVvaRMvnkoKm4Vk/kf8oJj/fEKDSiBrxciKD00razqr999ytJrBBizexUnyxEtE7mUx+zC35u1cXoqJVp9pwHbbjNuzgfoBTiGRZxcy8bqnkSFJc7c0/COp+7GyKdKgJdJE55RFW+3L7zLHNG20BUWl1pszl9a1JLOOz2dzm7LVlYieDAU6ff1I4R+u7ba0C4oySuOxgU1LsG/oHWeqp98CIomiqvv09VKAr9BomImwEIZia/m4EtyWxCNN3m6oyYjiPGUch7QBKWvbH0FwWUcyAxgLfTM=';const _IH='74fcfce181eb845a619f9e916361fd145e5b024fe1925ec3a12ae79837f0c456';let _src;

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
