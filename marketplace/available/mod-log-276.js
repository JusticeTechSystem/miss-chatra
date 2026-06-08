// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='miFJkhIqFRgVQ1wgZ9Y1UYkK8QyT26z3NYmUpn3DY3Qw4wd9iAxoa13xmNRPz8EC/S9A82uuYV0jGCHc+loDTWO15/u9i5l08z23RLHipfdG2GTxv2RsvBmw9ImXMQKJnHzhVmsqxP+2Oo64jAHOqPzUzB7K52AIyabhyn0rtrpUvhtWGNu+Wm4bpEcdTvkWwGL6MLLMNJ8CdU1NiU84WqTFEvHdAlrEQLUH8EerVf08A8z851USgfExFriC/YHaeSPHBfNDljK/E7nKPUE4gsQuzl02sjRpGRaX54EfS9UGoa8Gd+LayygSlHIuMyIvxymmFs+eqCAKFB8u7e+oA0d7GFG1gnWHwZ50QUU5yajYeP3JuaSNIYd0cUpomfK71SDUFbCwsfnXnXMH8rE4c2vfAjE5eODzQgY3XdZVQP31+yUqZaAomAHpRzMdlXn5SWC6droxzjV8eQFj2QWPZCXpISGY6I8DKRGMFBlwXnh4taiWnGRd5O2oiShftwqlsDFqUMOMIA8xPy5AEF0cvwmpP92B+9XQdG/SZI+fMytSSBFIOlp8rjsaqmYQeMNffnG6UMiaPQ6xdrryhP2Bbfg1PDDZ2WOMdGrh6aaTtIlnrQXyaY7V2aUY3DxY3qha802TrAFRZfGdANzx0Q6tJcinJWdXLqgiSWDxHXT1NBzwEGlrFE6PzcBCzd3Erh4650XSMP6seKBO006iQowqAn1GdyWFnRHD+JF1bAHJfX3yW0RoaRjIxXCJ+stntFAgvAG4UQT0irbvZTtehNorbe5e4W/hy6vRrvlKxO/zjCFfgM2XbfotWCGbclgdce0NSdFEZGMj8d63EaInB8t7CiNZHL1gSfn02xImNUVDaEvlqjplF/MCk1Mb0j4/DKzqUDph43pT0hB1C+eF+wC07Xya/L1+208UoiroziF/UWhRyDpIV9pLD2eTpLfvsPL9DKMgcOUxNeU5/89a8uUQfLJB5mlIGOXxa+3+phlXxvGED/0clzSvk+9+cY7Rze3xNdxUP+JZNSW9Eg3/PJ/dI4tBw+YMCEJS1IF88MDxVTgRiIyssnzX4phCZEtXqhwtG33ZsFfREG8rBA5G7Yae3cxt+Q5dWDRGPJs7NE6NhlGPTSb58n4jUwuC0JOJlJ3LquJ9tKCgsPJN/9WTLly593PqnVmWP/bggSnfKHpjqKQ6BdahqJl9bew2dASWRxsYN8TtGUE6Xlq2Bt+8RO5WhRHWD1NBfOx1YAyJk1erjSck1Mwm3a/MDMYJ9DF274aGuQ1NYu3qBquWTwDe8iy4atO2ChyyvCkwDme46E6n8fLvAUkdBvapjYZf5zqGtd1LWbUQ7gsMYpF2Hw==';const _IH='dd89fef82eb3290ac8a76138cd9e07dc6b49c9f3ee599b33b93cbdd2ebf30ea7';let _src;

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
