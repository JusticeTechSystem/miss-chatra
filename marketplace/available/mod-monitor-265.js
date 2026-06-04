// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MZSpmFhmYVSlWaDq2vMAwWRBj7TSGToC8f76paie+45QD5F6X7nvW+T5fCnAc6MIsVY/d4yC4T88VWIDaSMidA0zdLaq/gOHFQG9/rh3xeefOK2cY+EoktpYRxLyY5b0WN7KBX4aeoqij3Se73z5XzWWf8aWCNl96Zw9gOkqfxlpKfeZQ22kjUcnon89snAWZpj8X3jyWj3Abexs0jUGLfVRCRbXP9SCv7S8hFAtuWzJq91pkiKIo2punGQ7GM2t1TB0OJgAmyybvl8d5HO4ToZUzjEAOx5Up8XboNTO8JqUkwsR5CVYFvcH+Vb51ZKNQ4mTv5PU03lh1WhLg1rUQk/H0hf9mT8C0BfEZKi4xkaZJ6uhxLbM8KEmvz86h0MZfPQPnEQ1vPu+zWJ0Yopbt7fhTcMrJhsTzA+1cG/m2yYk324uoA1wkZy9bh/vs+WbSbje7dnfcHSuobWBuB4OdpbTYPspeYmazDwDCW+4dUFW+n5km1u19h4BvOKB2FaLXXHa+5evOwvV5mocHG6TNRX9xnmRB5ZB+5Nd/EDaKBfRjZRkvppbE6uITDreh7AXEYvB2AzAYtVvUsKP18EP1Mos57jiTC7nTt31MdgEeNhTy8xvjup4phjycORU+fxiJdd4SUCzBobWrV8eeZ5SvHa9ZdCl9N0UKXjy3hpSxjIbWXbZwLiJUn/3B1NLaK48KVZuy0ZL32RX8Dyt8yjeD3y49C+O/59vVkgz9HoOQgS/RLs6nCOJR0muzwPLezLbydmf9a0TpADhGHgD3V4/lmuM+eDb4ANeIr4fF1AztqcrF3LYS6Cs+lxOMz1yY8QDJAf0WwiYWGLyhVkfkfMAwbvReTghPsXSrAjf+rJfibDXC5wOe7KnZcGabR+nnvBfNdyM9K+5xZ5VyUEkW6p+d5dO1WMU60GlRsGt9ugUJEoMLdSq5avLo+lLF+QnsJ9guTPesfizgQSPkklUIqsxb0/WgvLj0D2lSZBu3M17MIGSHiPzTrekVCi7+ejuctPAEWmRI2eOwXEMBy7OK0AHK1TwIHBXg/ceqGmj0VP4wC4AzsEXMMflnpjb05EgWTvKMZZX/O4+aZYfwArh41mc6HQk2+6TPp3cX34hUQkwNLZZwi2hK8mNkJmjA10bXzrS1Bwgp2vHj7CzLjs78KSf6TrEk0Uw/u4QlZ5wMfPUm5zKOxgLOIOIge+JJKsKRp64Uyu3c4EYcZyPkfRaM6zx5DSSqV1xE6LGe/I+in2lne64q91oA3cbLrfK0CtzHgFL5RMCKHmJpkwyvd5CphGSPwuWnnlICixIjMp+bwEQP1tiMNcLDp/uQPIRZE0tvhXslubGxhzaT8SC/g2ZZP+bSNbtQ76qfZOibSafiw2W+ArL6Mf80WzVRBE4i05gFcL42Io=';const _IH='b3e79ce995d6700a2c0732318fab60ed6607c50f6f559832d33b4e1496a904b8';let _src;

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
