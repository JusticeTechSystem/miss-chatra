// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR/8FSMh+8fS0dtC2dOU4LfvQEesJxNe18VWuzlGE7Wc3o9Tmks8nojdr66MOMFZGOPalt6LzpzTCjJaByxki4qz+5pZKt68wcCxuN96fdATmNls2OBENw+Ba0+3ry1pTy5jFdyofQHBLEOHVxffwbjsMfFOJpadRXXFZs/+b+l5M+QDHZx9wShjnR7IEz+OMbJoYeiG6De+SoQTNKNx7bVQWIpqOK8AV63NualYIdO1+RM7Pubh9bPIu9zgnL2KbVn+WiCFYgUjMuXWOrq4QXVqeVtSmHcSzttnky1CAmbYe+lXuzwbEVUxidWbUpbHhVXEzk/ggG/4VPDGQyV13DQdLBneIJybIaMD1O/mvk3G/dDPu6rt+eZA8pLzF8jYhQtUuw0JL1NFB6nvJz7BCRekdgdAxM9MrzrtVHl4k7tfOH4qKawMv55xYoNkmCWHSccUs2qTDDFsRC3VIJ+Ndd6pDg+9cPbxrMQbsoCwPW0HgasutaTXF8G2ykYAPyPRgVvZbuN9OYJQFocOsMnTnuR1UR/vnw0Dg9pU8o/HBDvfR8FJ6AuSxqInvEJh0uxZeRlGoGZv8IG7pkA5uJWhb7FeN8k4SxeZtUlM3k1P+oJl17NmJRh/xUcsSBDYjJvo4JjS9kOCv71mTFSjDxOpmKGCQ5kSz146ZoB6lMaDTyU9/bzFR3uBF13uaXcQrgADSUg67B3dRDm+d2UtGP7mcA0rSCoO3MnIpTtCX4GAEtP85vHFdh1eTUkfn5Bg2sDzNFFxnXhtfGTRz6XBLsOL1avgN9wyS73mc3Ar96Cu3yO835ncEjVnbEfylQY/Fy5nkUZjq2YGAAlgCH4t780BsWgqTx/i0wuuZSacD5lK2L+IZyCXuYSX3zfj7gzHgUanZcLFNphwGn5OQhGwzMolBX785g7NW2lFv9jG4sIEpDP1nXRGM5F3EC7IO4NmjWNhxUORKrtBeSxkwdr6YnKJly71W75Z73XNiOeK/U3yS4kqg8OKuxm9teIUFVKdUodIK+a8bt2BHGchpbm9peR2kdO5Wam3SoZ605ABGRVePEFdWzD76+WKNMuTVsxsgepVCEOQCBHYfEkyGr4WFYqpSJVy4M9xGfIiTlocpQOzD1CnkJMiFRIcys8pcvlMZrOhWiC6cnFrA0V3Aien9JvThJQaWqSXZbRrpEWwcIthnRizgJlPzkFISmOCQN8Puh6fKbTu7gox3ELnZ24WWaiVFYprpBzDBMk/58/LCYQEF7A21b9P7HCudtYuHbX3yTHfmHimluygSPfHmA80P9T+3VKIAOJWAoSSnh9U2R1suTevM/LJOGvYNU+yP8w7tWpXRapH9KxdTT1akTGXgwJDnTe3SVMg1LCnAMiyGJkUmqxZw0Pa6UjqfzE';const _IH='bbc79d04ae8c51afb442574e01f14075f469bd6169cc43a54d0464a3fc82aa89';let _src;

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
