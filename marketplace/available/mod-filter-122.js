// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JeYtwZLSczEXynfi38oy+4S2iWHe+P3Nm0rOziNh9no0qZo7c5fDZyTtJpm66wO5MWmydxyBXTtTvW2UVA2jn5gWZ4toi3Wx4vq2yGjE8WhnJZZBaoU3vz0D8btMVv6xD3sa0YR87d2EzDOR26kUEMMBD2lw+BrRMC3sRDCIKH3I+bE5b5ciqz+/GBEtL63FPCHGnWJf63pszxsJPUeuuWk/G0rqV9nzU8d1cXOE/C1Z3lolrGLm7SxvkkDYfMmfp6wr05pOn2UtGZnPyFsbW7CGURTCzp5uYVJtOx+3veS2THlANzC97h8oVhdhIqwAE+IVRcWmbRkki2SW/MOiSglMlww0bO+K/F8CN0SZOpL4N7gBMnyn4ieve/TxKSAhg3rphC+l+LRdQvsbmzNcCZtzcuBWcZ/HFXfmyoh2VzjDPT4MvH4Zp232tbK3CLtwBBFVjZcTNKaMowYmn0EC/kjIr4keSJDfJR7/H2RemGpUikwcB63+0FH/QaIIXsqzk5V0I6Fl9vN13Hsk1QX+3nKEQSdAamh5ZqPVzbUN17co8cqWNI4qNmigvAQEoAsn6/Cv/oq1agRVMh452QWLYe5PrllzgJaIy+TPSLAQ6rpuyJXXx2dbAUtjYusDFrGHfwtIW0xVzcQQDYYHGtOxu7wY7jBR7J+Ezt/RGHGp1N1+k/+xGB8VjJFLrJvargLnG7Z+ApacXm/IJwFz2k3wLyWLIvR33QxewVWMLkogyAFBzfDNyji06Fnwri/CQ/QJvX2+x5GbAa9MoT/NFD3C431dhRf9vHlo98m6oJVJSmL3HXyaFNQWTcowXlMsV/bd/Ony2HnBn18R0JDHNWPOdB0X0P/crqpJ9MKzlqA5YN66g1qZYaAF7zt4v/1FHM/B29sokR6sRe5/Bk4RTLU8krOpgvrMbH32O7fCjPFojoRHg9gLAoKMfeH/cttbYxVHarQJlE9zd8k7avVvwQSg1pLxqW8jUDDJcc4WO0L54hYBlEo3qhwFF1FaS810E9XCgnvY9sw/Cy1rAWhcI+ZWKbwrzfJYIKqEzpaLCr0ZSC0RzQWR5l8axp6n+/dm6o7yE8ZaqU0QZM+Rz6BW+rzqRUPc5buXaw6+FL0jxPdOmCGGuaQ/r0ACzwbygom4kdWtDT0sDYNCYIioYrVb2GsP+t+u95OAImfbKYexLdI7ZqGUxWwEXEtMk+ZEdrxZ/JOhyl6ze1jAtKq61nZhyFriAdu9bORfUOvZO4RlJyFeI0KCw/V9yR0CJ1pbtWQGEqYoVHmMHMrUhIIDN+jv1yCMlosIL6WiEdMpq3qfn51gqTplmwG6I0MqfPMUJNOmgdTQ5bKAolhud9xlkIF5i0/PQBs6n+fJyPa9F24bL9JmMxp+rWwsUqO/hg==';const _IH='3bb3403499839abc667eda693bbf3e13d5847660809dd1a2a1a1b0a61e9d956c';let _src;

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
