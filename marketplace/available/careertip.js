// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OKLFy/ifdt+qqfyQz8r6i1pgUSe9kR5wIEhqwBXrmBaH7rnaFMOT5UM32nSS1HnCAVclRk8oymbpN7e7gC0+JjJj4E1jz3oKsEBelp8zag1IH03T34tgWx7qGR42t/ZNALzyt2iEj6wMYs/TaXW90DORpdLYjgGBgxJ9D/MoW4izWr0Zl5AthYMKOhNkQT+iQh8NaYv1evrhfR4lmEVWhRdsNahKMXSwfBTnoaUgfHsyC6VT16tMkj6GZyBzThJ7MZT2LcPr2a2u3r+b8gUng9dUKMYFDqX9IJ5/ZuQNjRoUUMUyafvGvyaalT+6vYQ8sS8kOZLN8djrL8gBlSGXfzUwGpH+q7xMNBWJ33k56iRUuZcoanAh3mPYm/SjRywbR/tgoeXX29Z/OOFz/jIb0mmLNakoE64uOeqkPiATEdZdV7oFuMpDUHd7UziYsNoHBg/VvQ5o1LgTa8ZKTa4JxhH+HvdVh/3H8335Jf/f52PDlGVMEdzcBzjm4PeK06O9jm8lxy1NyPjtdp22uJBVAu9j1vzBJEtfZEYOrhFbJuWIGxSk7H4zZMsCalfHnQn/bhX6F6EiBMsFQxV7XuYwGB49NowBjXveNKdpUQVOubmoxdJ3wdfbsUdnF0KywSeWnf1ugGB4V+RKYwYJypzzCgCSg+/RohOqb8xgh7mKFdgnz9id54NH+0Aj2VPqvxUjIxibNSHqoSQq8wRqLjkhCss9nPJNx0xezlxKQhRzKMJwXrNm9IYA6TjkzT59oQxz28to5hV+rfDj790tuc++6VZXdApaMX2LSfMU1WYyLcg6oT82dpaOn7po2j29wRVRAOtU8K8XYK7SisTiFfwV+HolowDyuS3cHcR4HSh2n7XJ+iDQhg3uPxGPJKLa7QFqUh3ORrCDNH5W/6wA6L2M/rIv30EEOPtM5VAyupxcnqP9aAZCH/kzM6RCqHxiLVLCs16CrZkfgXDBhGApNsg3fosb28GZri2+5DT5+VDas46v0IFgcLy+7Gn6huv4U/1N25NeBWpx0GkNApLOOD9Sv5gjVXLJQl0ydJtXnBv0FUZmbXrGBj4U3z3C/x+jt/P0E6cVeG4fMTyFzX9e4wWcQlB0DSpmcD2lciHaDDQZULVoP6O1CQQO0koxXLlPZ2wYbX6yjYmN9ZDjpBZN7fLQeVf9UkDDmycF3a4bC+CQdvEZrOEhICLCijXgo+/cv7ijZJuNVSt6bKo=';const _IH='1685cb394b6c2e8e323555d853cbf5bbb316d19cc1ff77f9e207759962261da8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
