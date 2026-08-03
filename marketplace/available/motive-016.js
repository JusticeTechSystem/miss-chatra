// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTFdOuLltkD8NgDmJJ4LCDEv3sn7PQA3WoOLNK417xBQk2/4pQqjoDs98BsDYiqRcpxc1KWEgmtGQGc6Vy1hFnE0ozcEkrT+6VYOYAGIAfW8aVV8mNYiQsBHOr3TjpkrNwRR84IY855VnnWWd0UQPvj9pWy43cL4AcZ4i/pJJOJ4L8cqk9ZgSQUc/QjZ8WwSBNCm2sddKx9SIpo9M26u8/QkJStmMaDDyQ6D7g3kLAlmzCk8qkr9Q3Shqa3GqyHtCpufiHuwTitHUK7+C9iCuAk3qxsGRauy+7CFRnrSsyGqoke86TIpuZixEuMh5wXiURwQ16VGm0NJ4vdoRSIlOeHcQTIVabmNYG1XLyO8t4LIROtNr6WbW2hCnaEZyBrxlz4vaq6CmC4W4DfeKoqSp+XqOhCPqVJK1aR8aDg2/2AhU5N2tuNakPeMztn2K1PsZOUWf1bHuZHio+T1JICKhdKIIRpik3Nb05GSxGwCcyJQ2RxzZa4TXADSJ64ELuodt2yYMDzNTneoofU8niQb3gP5NiEfMLS94O9VLzDxdIZnSVn+3+WIJ/w8VBC3M3c4CdbIS7HDDRzl0WKTR4TUiQt59ZGO84DSqwKh/42fsNz+w9AHTpXpMy7d2LX60S/gkqmAkUbyDDc7jgt+gYuEPbYaw2y8t3BM9PgoRU2U3B8l2i1mVK4V2pWN8ocoY2UB3B7m8FdGCsRBOOiwXlGI3pCueIq5xMILvmdXWwpHEmSYjEMDj/E1JMPxKBuIR/5BpXNUMgnOwbd3vAECJuMfeUf2z0AMxmhYDucFJd4eiIUPghCfykFF19MxNCgYcSP9vPdwDfs97EmLvqBSFtfHFd2qlcT3N7RRKUARTuph4B21pCKBE0gGGEFgx5MTZz3fVpjekJeV8vYmVwCJcrS+mjeBkpgRHOIaJ4LL9Rjy+PNvRTSEZowUjvbpf5nJ+XaHcjyw14WMnofVrvaQEH6PmMdxDGVbLp+vx6BHWJxFlrPwhpFQrlTMq0uTF70t7sIhsaI8RXtL+mHMmGF1vb5QgUO';const _IH='d15825f32e8602275357c1fe9097382875835ccecd70d0544af7379a838006c1';let _src;

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
