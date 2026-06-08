// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pKEjxtI8TF77EeeYBbORrtUk2BM3rE/dW2o/m3Sd4k3ad4nv/776ohPHcUKh1h0a/pjhTuVTuJjgLTfNU5/rJ48z5oeYpO7Nzg7IPJVkwhq5+LjB9HdJy55gZ2jY0l0TEzWxmSSfaXv9PBXhelCwhWm3liq6V6n7dnZutKHLJ4kQxZ3diRK1ZAT5ONh0vEHf42yvN5fcNXlg/aDORLYFGdOTi9VMcWdN/23m3YIEIRP5CIK2RlxnuxRMrHFr9GcPf5Vq1SMDa9zuiydudqzWisTYTG4L/u73Jwy9CmCKvjMeivGk8oLdy57foW1HXTy/TRJ4lQvtkIs3aL87jLWS0SPlYDI+IdhBW8vlR0x4aOyxYxOvdXRwM0OtOpmKUHMaYMqsCltxMcTJCOd4U0nLG+5RwQcxeKlTEWbt6pGwZG1/EhzZH/IOic4GpkqzwndMFW6P79ZcEFG2DiU8k/A0RmXv9QbKgo31YVpaDTZYzukzInV2/GuhPnFQtnp3Kx5Es8ghf0vl/s4xpG3WIubV0HOXZNgmpCjKzjAWRwELr4a2ujlwb0FFN8DzpxFhOyG3YLJvHAwF5xsUYcRduNiUQiKzIQKOiZQpei7C1qS/rZ/p2iQEGMyZoAM8RntDEu86O0I5i/HCmOLgiRXqY0ocmvDDkRlfO6QfHFH7T0W7b/0vUAJFA8pYHQRa/7eHJurJw0jAAZnXqLRIJRe7LqfNGmJe8R7jMBaECmRJrqQ1jDBR15BzyioAL+pyLVsMyUuIyUOyfJjUHq4ckQj0UVsO9TAHgmlmgojPpyFn1UKWqhvszIlqwKY/OkV6Xtn9D80YjxOS8KOADXIGerfuG33W3jIT7TqYRenirzaUqnTk+BCD+7hdfXLxhBrHOuFMpOXC9GqVW3nbPm5tPoBg0FqJHnyfH7nH5Av8p9ce4DxsyoA+QFwpmjGpLWPR1QymK9cXwPtAVqDhExSxiBu/fETb/p7+phesNL+BdThYMyYClOAIJrVTNeHhhed+lBYAWDPl2JcIkZzyxZVY7vMJckSj5WrX9zCQFbJragjTXRNFETgyMRHgsnTovw2Q35Gtt4dF3zl1AYQUrr0UoCuic6nTAtv73muQg52gA41LZS/1FPHHN0/AGpcOR03QJqnH9XPnzEC8RkQtIiu5PjuPRgeT4HYBxG35QSvxFJzhX+vCyAFBxHcpcR3AIRCYOTcKfJ1cGjsITfiFlTetC4aCTmg544jZfbhIo3Gja2HapuxwIPZ0+fd8FZ4TyQa0Ltn1FZDLAQ==';const _IH='33771dab346c5d5552b2e377dedb72d19d17b50bf2e6805f23fd453ed09a6bf4';let _src;

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
