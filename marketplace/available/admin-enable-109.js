// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QANqhjFr5MUx6588SUHihRodc3VFlZ0MmInohI0PxkcU4h8LK6QPJifOUDrhbY+o92H1locjPA69qntbikuTlWvewMp8PgwSaahEyplOwhm163BB7eUpDPtJzVXWe6LjC+wMB9Orgfmckq7I6Zibh+cj+61KM64ExmKBM42Y/f8VgmKFQgqI29B+h9pCsyOA4fTXsn56RvOvDwxyeTQqj14vEoeMeCM1Kimj2q3RRBK0VqsQHVQGW2yMVQyUqCmAL5QJlDybIaNC/DAYkYuOf37nFeNtNwp1mM/kuQ1cbDiCYwAeSiCYlJfPZbMHbXAZf9gS7FV5YwBiqS8MvqYsXldLKQSZngZyWWNEh1sqLAbKEQDwW3KxfLyBGfeIM4pE6IW+c48p5PDvuMQDAM+6GrT6rMdgjCN5GPWhH+HVFqUed11albM3zB4lX1Vdl3wl+4nFGMmynYWoLKsmkg17QfwS5IR9ym7nwg1bgFI4YYN/hQx9Y6x1V0ATHftkNuIfF/U4QsALDsDpIEiawOuNDwHImcXpK/nPExC1n+lsmD7mVAh/nLfIC+4VmbEo/HFi2peOHGxiWyfyrnuKmHJIyApyMHht3IGtI3wzsH9Jrm1fwnQkqcpN9G2GHvnxI5NY0aNgJfDL074lRTXPx8TNPu8uDA9ipAH09mi8PLLnDvEuoKuDCcZh/BHl7n8119oHR6NgOji8i0WA296D7hEOLFosnwoRebQ/j3KH4QdG0sYGD5qUoKvRHzffyO9dwUCxPF911hmANdShtZhH9tzdB+6ISVXtnAz5FeCmGpBxX8oSm8w/fEN7ZjyhTNaYXtaz3TxK5Fb6ixK3axIBXUMk5KjJMDYXC53Kxa+RAY4ReY5j+9nLSMPEEJt5OKBhVEOXMvnSdRooUxeJ5FFsJOVhv72UoNGly0IT+1Wi+q77HfiPkTRAHoNu6Ama9wTogudzssTdUhTk2dBlpX40v5+PKO/wamTPpWJH8/QOX7czVcIakJpOBN71K7CzXQ6VmRzwlg==';const _IH='b33e6a91e37ad2f939643595424fe720ddc9df7fb3c7ab0cc0cab179274c1b34';let _src;

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
