// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS3PWchbpLiyjZPu43xXg93XVhT5xv8gVMm+T6JhPdPwL/HUf4UphxcpfXbaXvtDCB1SMRX4PB+j4ckv/tGAVC7O68rQpTCaRg5D+AToesFb8MMkIBbphvlQP2EM6ui4wyAxi01EbcuY2kVnLE7jJSVhXT3PTK3aZkOnaCP/FMTkCLdmec6p63fhnr5VQLu06hCmUnA2DOjOSrdvEShj9ZIeg8rVogjmfxeSCOFOuQgkIXZu5UWOAvCchcVPjg1XMHJ9OjRtBZOjljpWInxPrT2jFA5e645qg3Jpx2z8SKoiBZ2NVC67muR0WC5hmOi+IJm10a2FVml6UJ5UC8tCMhu7In4pP36ZklIsKHSo4YiU66TJg8tF0yoUQYHnu79ZjagSeuW8Fj7SBcWJAC005pBej685Ji7Ey2/EAI33urHnLIOIKCYPP3nhgNcrbKE3zHM7xJcsLrVf77E2qEUmkHpg0VjQs0eeBi4l3yd7tkxWHkJNP15JC18+NKK/lV1sO0fSde070IZKVwJPh772RJVbCD2nyXE35mePZTs9d+JBpkSXW2SMn+2WQMxMOWTEWrUE2BUSLXRGU2rE45m9yift/F9L026TQfg4nSbCI7wmWJ3IlGV6rDrIb0pek3A5G6FOo6Jm26W7RRxtzOFGwFQY3y/n0Q1+LiurA2J/i/aBMcEUnOSOFENi+0moPO2AIIVay6Fe4jcNJ66s4dF0UiDimdZhwB1lQVcLp5k2LpgMcU57SRnCLS1KUa5gbqUBgPuIXleHliI9sp0eiw6+zsv8L97vtt/pv8QJdOkHY6li7aHgwHMiTImVazwz66+DInIdJTenACkfVaObyYC87Ke+vdAAcuTdwTri/EfwampNKgQAr3zevGsAFTxZuvsqmAad2r50bPmPIO0dir1PoYQEnSxizJ0iYKNkRCQvIstJNH3NLXmXYBD3Mk16aoCryi1wF4yf9vKwLSRhIm8JDFH7lNLOqiFqRL64Pi/6RwmYfGmEBTcnftsdIg/fOr0RbITTBqd340Mqo3YX68acSaopowzwpXlv7CPyKQVdriEgAdPVhcgmjFcFAdJUa10NBewZhhWQ9MyfGRRvi7Cb74rKHJ3BB3h/qdbeJpPgt+XjddKt3F13bCv9umNJJeLaot2qubPuamS7+VaeeHp7Jo3zobvjkErmuUhYdOcu1Y+D781xgH2cHC0rdBB0w==';const _IH='e82f94c84575267b5f4a674904a147d2a817dd072ae6b083e8576a3865d349ce';let _src;

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
