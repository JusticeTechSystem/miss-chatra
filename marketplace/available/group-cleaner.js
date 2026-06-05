// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mihCIoRpe7lNCc4v29vcgFhBQ6ejMuL5KuboR0ClufAknRMMDQnvgT4m+cK5rFevIw+CWXb3Urwq2N3gl2M6IA5noHRsojJMxi7j/Cj6VstuhRjBFhyR8WfYHdLu9EvBaCDRhFH97zSPaZu2Q0WDBS77y0caM+WT7tsgOEW+4kewSSNLfD3i3iphC3kQHuo+USBJPTh2ZgYBUyysi+Pjv+zheBQoMr2su/hL91zSKtuVJ33tVFom1nJUpSTZ0nUJKL00PVgh4H/UXyNsrEoRkxzW17FBKZPkrkgQYd4EoIgAL4Cbi7pxWY4BKAybx8Z0LjRoImuMLuQux1KOnbzjLZJ+IvbIPxEmrGij8lRWn+NWV8mNblmBJdjBIyKickL8LUorhfcXVqkMjbIzonPHht8Z+nd5LmVR2lCalQJrD5pB3WYtWzrbi933e+9nTWpSnttAdcMVgQc9OKR8zY16bbk3E8ylMaYO4Dz90BkDlfjKvhhk/jpTio33wHpLVuxv2kw8q8xaqP8px9Vtn/aNWMOCSrpdhMQvf68mNmUhYCnc2L1YqBPrEUpiWLsz+dlCskJELFHZ0/QAN6zZJYMPIUMy5ncg9eEW+dQbUODtc+fEbW+rnct0GVjkxnIJ0ZlHFRYf69kAohbj3aJ4fSr9BBUlF8fm6uscC1DET/I+1iiCsxZvTxzWtbFgiOTsUQF03QeeG8heF/nh011LFhDy9aQd8wRDJ+xQolLFjVq1Ev0XuoxZbFV4muMbybeOs3ZkTVXyJgR/wHU2aCiUssNGXkaULEgDWbaMHGhNndB8BHVVeaPXgryHgnu1RGlmkMHSEmSVDU30oZu+dJHjgP5OlyVDNDTlZgPfEauUqfl01Wy1MhFAseRxhQkA5aAneRPCH2fbVuOgri4R3dqqoexjPba1i4pX68AOapqPokgY6Rotrk4kgezJZNCWhLrODFrdGMCcn/e5TJ4FQn+Ze1GzDQMIC3pKaKuPgaCgZJGR94cFVg++xSf01PfbAqz1nmlxWe8AYq6yel5kqBT5KPqov3yPwl1GIgCks0eRBkoD5dfHU90iuar9NnBKqPRD8ot27Ic3lhKSD4cmrPjCQyzG2o1XQmhyhNaMlEd9U7Tf7XVjxnTBfFrtlIoSC6GoyPge7TOORBsyq1LiaiMJQxTXugJvgCHptGBY2SYnGxxT69FcYgR/YdQGHEbL+WHPwAQQJ71wciQoYoobeEYtG5Jl4rK18+iA2gwjYnW77F2LY/DuOm7azw5tiKKBSHGZW5x3orARkR7rpBmNXFKxbDfxxI9ovk4oa/V2hLKbMGCjKOliWE/G42ARrJHUG8vc33YxEa3dY6BZzHdtU6QPWVVlijhjXcMpUm2lFYCxVM9gGA4oFEZto1RSr9rafFJBwnvVWK/6XpVO0GmTYkdM0wqahWVEaITBnT/H2CVwdE1HINim2Ddb4ocUCk75qY5CQPgl5Ri+4u5s';const _IH='083eb57d2beec5af2ef3b1adda42af8f618e2115f3ed35b3566cbb9a53f41f85';let _src;

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
