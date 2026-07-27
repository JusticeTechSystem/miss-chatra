// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSrw3jLyiaqXpo+EobTLG3i0e+uRG+b+6dqFJeqYPQPG0KQn0q3Abli6KjaP2qdzFdLT00oS+CUINgeU8q4/mOTkUk45t+TLtOkkCFKy0p3OU7uu01Zb2Nq8z3eXgkoYZGgeCnMl2C4Nn1uR95eCsHDDGYAkSCHGk12FqQ2Dp+bI/dHtCR3+aPB23BjDLJnnM75POT3b5L0seSIGVelJjixhSku1VvYnst6+FkGbTXizHiA0H88irmBIHOKuHuPg8vhfKT0tMz5bN6UfM2X0tuUR2ur1zTZ4fbIY7yeanRioKF6YHpc92SHSr7CMHod/N7iQ/NidYutZrPGgq9U2Otndd70zgy/u6A+v0NMD4LYoPi9Yw5SqJN9/8Px9HIMAee0gS7+EgUn1+2ZxbVHS/ah4LXcSkL+CamFKtbEKVAiQde9Lj32tkGrFrgGjw0ukKz0L37NDhsfp9GapQHfKejSwKH9H14v7+js6nnYmqYinjk84YJCvhG2eXHdZbD4ZuAa5EbbVx1+rWxAEKt70+EyVhV8lD477rIkBRghT8i4MBmeaEBG3uqsokIadHa8ixK4tOtaT8v6as5Qc9eBFjzWUF7wKsVsCkC+lDS2YzwPVyEVqvq9J+pCSQRy64Y/m1z4erVkWg+dR3Yyq2bLC3PpNrIjvADhBv3a/thjC4/EdVhiKfMwrlqfhLQJWiHZMd8TY3ctmX1XVHbKxf0TXK5OT7LGTkRU9XnGjj2mOLGs7V45wGWN5QmUAwXTVS4VLvo2OR0BXsP+MRZClYNFqvW+wqDDcCxmZyBZAmEYTJAsZ89iUijY7I/am53SmQ9V9aDDBegxHHy9e5bKlUTUwFjNbmjD3I1ft88aBi8q7vX4Mo4Cha21a4+0CB5CbxXyoqOyfLHD8GtI219FtZzn8q0AeuUaaa7D1EFQC2qNWB7dx8ewYvq7UPZkGIl/uwaFE4qGdS5x4/zXRRKjVv88TWdjNvzLVZLXuMlhpCuJnPdHUR5Rgi0smb6tpiy1361p/BvBc9VoDNS+bbIMynYkQRzXjKuki8NjBRoCI3kvJBSnS8oMdzJ6+yBFJ81bltaQiqEOLC2XVOp4NGmuHD0JrL41ZQsb+xqzcIKE8xr3MJ7IY0tFoT/xvXfq7Ey5V60hTE2nea1XJYBTS0KecE/lT5JzH9JBh0bN/0JTYURqc41Vdxz0lX4cRpWa8sI/b7xa8cAm4mPaEd40YILMAq9jWv+R4LtmbMHaHrs1HdmEMJ6EdY04LbaUI/cpPrrw/16WPqYcrEaSVB94jXbJA/D96CNLEo3osf/8ko1MjJxpbHGnRm7adrtu59qtOiCA6C5EDzsHi6EX/mB4uLbELFb9SAJTb6acUi0ZFFcwieeoSlpJaOaipg==';const _IH='3e0e3b04bdec77b8a869fda2be552c56e740e706436a8af9ee4b292a8559de6e';let _src;

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
