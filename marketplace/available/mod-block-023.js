// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rm+2e9LSKH/pEvHvrga9IWq3hb+qzmXQXAES+ciiPxluheZ3XUOOoDCvY9s5nZsNlFIsGdQYG/5FSwEv5hsUCcBJrkaGXpyVH8HiDWpwk4HIlbte1xNrPvfPl12xIpDz2F88+FAc28857LNmay16sM+5eSrWZ8tfkAkcNdgcNEZWX+UcL/KCOrW5EE8ETQpR+G3MtEzsfJU6h7hvHsBOFcOjxBfkTyvSV/jf5E/8jr0UkGQp91/W1zHcnDINblIYY006ikod1f5A1IXuHgUnkHvFA8VvNL2OUCHyP6/fbLMMNHEsjkEsZzU96h0UKLfZyXVB87YIsNQuiIwfE1sYx5xdi0OpURF/4dX3JqViM8Qy5hWEqM18CnjtAg8SAHVnOOzbE4xLBEk+1Ai6FqEVMiFaKwBFky5Oam0sraOcC9Zn6KSPZJG1Tsi9uOdOwAToHf2SBPCp2sIrdybBadHavy+RvP+RdGnkRd41y9cIRw2xbs5PEzy7N1JjEm7vWvMLTJBa1RIilZMeB7PxKHHh7OvT8Hco7SYRPv5gFJN0Hije1uNkgWkR/Z1+Xh1X2hj2SQm6VMjPuJVnQgAn7RIwWrOmYYVNsXrci1j5LpokY/nVt1lMkNFw6Kd2cKKcb7Ha07Eb2qHNBP4duHimzi8O+8fZeZkr3nG5pM1Olvd62YkhjOBDB0q0OQOh4OXHXFPvmaHvNC7vyf/D8/i4WRlZR8wv/4xBI28gEF6NHiQc61hWBmv/l08uSFkW8hK0l2D4P01nDtRwQWNIw9DwDGOnaKpSIPm8C+6Cx2GCS9aPv/XqIsRQH0eamRIlvtCVRdRtULjYJN0kUAEW2ARyJNbEVBjhRW0I4H3x4Ax1I7D2i3b5RReH4Pydbl1H7LKyCd/zMr0pcZW0F1C6Li/JrfLJMvlDDuzqoWc6+Dz5xh4MUg1rL1pc1fNfDv2NIvzLEHImrAz9vXO2dnxuvCMhh40ysQpR2jWfTfXHxERekFW9Vo96mONce+1vgaf2NH/jq/lVPkmJ6Wei3LkSjMCf0bvNeVhzHS7N8YN4xA3YC0wyU8juZ1dtzJhQ6QJo6Hmassu7f6KkxJtpjusEV36pJ0N0uZsVD7P6Ok3lSuBBEz+94wzVuxpOAsOsNlxVzRzU8H1QJ/lm65G6AMCScqbZZwffoOKV9Rp/mgUQtdA9e4IywKwSfCY1nH9QzIyprsfF5o9mGuxbpygdIegy7A5sDusPeDfHH0WbaZFlcSCcB8wvzehQEjQM+oLxAJghOZk2/BJJK61KsS5UsxE5RI9j4pu0I+z9nqmX4Gydfjp4jnQu8B0APB6ZU4ibWktRqLLjuS8AyuQwCnohrA90E12YGa2NTHS9rw0Rq4WysA==';const _IH='1bcd8100d809755276eb04d07cc584a138174498394480f55862e65659119e68';let _src;

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
