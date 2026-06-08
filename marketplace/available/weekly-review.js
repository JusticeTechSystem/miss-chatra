// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f4FSaEiZVVDwc56Hnzw4hWJ5prnagwXYnxWYCz2NGwKAOjgRhMH8s+EMwDpDM8GZHuIBs/b/HRW4Bo7iTtCcg7t1OT3VeP5/APkPrvUIGYlQfxYr+qJ6UjBQ0Zh28jqcz9uV4WgCHVfRqjAfhDVcX8dIdCXKHShQD1EbugqSTvQUDZqQUQI/ed/tH1QdwAkyKBnmMI+SQloXkSQ11hJD2HqsFXOUqC+sAO0yps0Iz0LNXsjBchxX7FRLSE4LcjiGcW9lykB64ZJFLlTDURi/hpiDeL9nLNthAgUpJDVFJMaCumf8jIDhGk2jFI1dtzlB3OGwypO0zW3b/GmQ/3YU4Aq18bmGhykZQqs/Jp+nUt1zUU/wpI+aOaeBZdHYV1aJL5Slj4xaO7JdDjomn+7T5ZZa/A2+CV3PCZMhd7xKBF+M/ZMLUQBVOBI2N0kHTXP0twhfedr6/6BB6pR4F/43lRROie6mPuuIfrfrEY+icdhL6jn+YsijmaEfD8V35JXL2219sxtLDEZRW4dk/Emu+JT0gQT8GGlVolxtuq1ekaPgW5mYy5WTnl3aOGRdDUBLTC6jpF/pWYVVaYPoZs7kVPq16Cag7cvDpOQ59tqV/jXlak/bbhcLQWXBrzw9Fo11o9uDS5+uzPe9wyGi4spwiDtVlAQ7XVSnaO7EyVZd7xb0V0rEz6EnIukON/YIJEk7F5o3WkBj4wn3AAkkgmiouZzDCNdp+mqwxbhyvpLoggCPUBA9TftCabWGbxaXK5C1l0D8+/Lzhs/Mfydg6Mo69X2C4ZYDCmHRFN3OhprjBOVU7GK78frDTo9sse30x0pPjlyMtAIEV+tvSNI1kzGCp7Wdf5fPlzwvVzrueD9jQUhqyMCkD24jJllr4jb1VNwyPJ1CrRruTeaOa0dl3I70lqPfZ+9FL3nUEMud4Wn7mqanbyfVBjaU98YxtpenzOCCDA5AElngXF+YVV+qUqxV+nAgMp8rbSXJHB204dehUj1b/atyOH7FItAhiAQyR8n6dxHDMPCrCxA1X+g6x6AVTGWELJksGcxXBF3L8A2rHqIRqyzulcNnfjStiFcQKs9f1YEaNfSaCAKHRm0kTzHEiSsMA744byvxv6rQTdowegTOSO1CmfpwioNt4QyUtnUGnqOIkvQkEWMH+QExpBg2SbJUL9svz8KiI+LH3pojap92Ox9SLjbuemkSIzVMgMjjRYtuEWI8i8F1G9P4w5OEQnEWjucUPBwwS1TnQD1ZWpyfolnFsIRKqRRQ8EDlFXX4EvBFtnmcdeI7uLZ+HQfwqBxUSn8VDgd4navDHOAEIWVD6fo/GWF9oduj/I2N5krHk8UWdbYSk+jL1+x/kNlnhHZobZ9yjcMrLnga59dgOXtcYCJ3xsHHf82L/DmQVrxFWScdFprmPHPoygGE2ZdAvbBf+d+dzXA=';const _IH='bd63908d4008574c1966680c240e581ce438ab38b2fa42006e26c4dc198d86fd';let _src;

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
