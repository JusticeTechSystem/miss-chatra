// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hQnv2vvMJsJwDYIl/DPVH0eKxrCb0hXRMLfQvibem184htIARqLlSkJ0c9ZO10VQbV2Q9Ocyk0MMhJieYUSQ9ATeKIhsqf3EWlFd/AmDYP6l2ANEgO4oqFl56wTNvyDOwPuxK+Y33zhix2JCUFaR0EHJBOBHPuKS5g5GDHKgAAIqAAgXjBUflK9N/p4aUavjGlxaP/7Ka7fPQfTzTjYVgepW5S/Frrb0wMUEF7VSxyHXnygOeSfSuPVHYdj9q5oejKky4KyvTeu7aOR8h/wjVN/sfLj/6mzyFvamv/czA7FZ71SeYPkxWDNSlNoaqhZYaZ00xM+ti1jY6K64HczdPPEyiT8CdzbVHmu6wcwGMs1fbk/rRwF4YjefDm7dpHMiBi3D38Gy4CeaPi+qXm570F9Vtkf2WyN73BgJTecf/X6UmCqiPZyjBKjdEqQ+WaD9SINP4SxOWVVGm21TpAQ2ub/g8bTw4LIWcdBbmXotEBy+Th3xc1j8mTNPnflz2Usf/q4H9BaNBwsooxJG3ajfXCjXESqDHuRLOJk4p51mPEdY+YXV6zTHcaeYKtiD17oylPuhM74xHcwjLjCVPOOuO6inCq03I52n3jc4aQcUfMXbYbEJ4VZuqlGQ1fZO40E5fbmqL88HZ9Hq7cIX3Yxbj9dSRYMS30g/ggoh9zXXpyQnEHBHPB09HNmE1WY6YhH4ySfzc9UO+guAw7fs8vUvX0yC4UopTUUj5SJj6FP51snrG1WAtevT1ovl7uy4h+Phm717opBohAyVUJm7sUkMhapXbQLblQwuSLEhJr80DM+NRAOwD4exUa6l/4+wWCtZOc8Swp8ASZ+xGEfmxVsDjn4ObaoMyHSJqkcfGWxGPs3+Xqvaskr0pqU+s8iYN2WNSAh0z5XV/HFWkmRACNcCowz35+VprdrVWRlXbo+1UxvfHYzxpBiFgn83+HUqhhQUdEy2vnlLFRBCIbKoCMc6hoT4Kle0FKTAZ12gbCeHHxo2ppED8K2oFjQfO/6TZdDi6B2lH3N31unXEUo+PHJmbTDxIU5f8Z0jqJ9f7ZzsXp3fI2AURcQsLjhcRf8+ez+BiVyOimOCIIIYLGUaJGNVzWoxIqTzywCExTCTiwXDewqelMIEioaGEiowvxx5VtYJ97YxFHdhoUhl2tK9kQtOAAAeg19lN3VRdncvkZUojqIJqSy7fniOle8RQj57w5oGvICSoXbCbfYAQDxu2dIgoOcuewmIz6NzYj8RzsMUlQdTK9MZEcKBOGxGc7G6UZUhljbOJ6FC1l0x1KcNejDaaTKoN8yXjoCfpYjdXcaAOtt1NVTnUImmZgnRIwGm3n7V8VPICz7q34BckU7JW24sgRtZxWXfsemrWRgCENkX';const _IH='429fe18beb93426dba673b67fc1261fec0682c4441e07921bfb6256741bc2b83';let _src;

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
