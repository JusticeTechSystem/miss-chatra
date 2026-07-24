// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQRb3omsB5/6LpXtKCHIRMIeRbjE9vwhn3bFMwFlNKUcl5uZeGr1vHKncgmIHj84CGFRSSDvTt9+ZI3bt51EvbKCtdD7HT/PVNR385barLcsLKNCuKpuN/iLKub3fnJCIReEHaB6VK4HRMqPFQDhwdrQR8C5phdZF5F/NpEHVxk8Ftt5bg9H8joUeZv++cW+g9Aj9dIaHn38jgu0SQ3HAtaDNKFgdZCh47S0d48Ngzt3SyO+QC5kScpOE559BsbuabFBuUYmrQ9eYPvLqbkw6sv8LVstrig6FBkCU/P7NLa0R/D1mTeI2hxgKffTtB4TbZtuZyFOOOQJ3mDhrjXMMhMoYQOalGfF3yAOxwqYFA8Wrii5r7C6sMFb8fEYfafQqe3jgfSc9VSUVjAYY2ntKlnLZbNc0JMTj5v4u1TjhBZutiHqbFoUtWLvn4Y/e803nl5knD1ceq/3dNffOAtgyyjjJDcvelxDBazUWB5lpwnR349UQTGwZKJTWPMM7LzicNXCNkBNgsaFUWa8Hz5pSRDPesAdTkrDeJKbeYByZupkPo5b0UXU8OODqQmvFaVDBM8TBz9DJ2bowKTXVonO3Y/+HqSI/MUjvHPYyp05NMHKtPjkk35S5MJqMaNdOKyBRxGV8MII2TpV5Lj+O8Z/mNKlnBExGG8YIwrGMPtU4qqw6BFKiHK4v9maedzv16DakqH44nW9lZR1RycFToq6BcIHdRMqDRrTcSBd3jOIjHv06Fthz8r3eH8B/jQCRygaRvlYpuHszvYvCPqTwGVDjX4hIJj+DccKnRR55VRsPXGQUioTGkZ5UFVPceZkgwgIOdVBeFDSDyENgNfw66R7ue+4X79pPoh43+GGoKqrGIKQymMm1Df4qq8g0S8Jd6DnfIET2TZklnHbsaJ8HGfkh43MlnEWlDLFlbDdaiwZM0d+X51dERbz6Ilf+Zsy0gFqDRZGvUlxfFEkeKRbXpIiAGib0krGEy5r+BLErtrBfDmK58FeEjaDEYv4bS04DVfKq03eWLvdNnep/BEEckn78RjeGjaknAzmky1zmT+oOp52ZYgcl3ZjJgCEPIreCeYPRDDt1rHBNq7MMukk/BvM/szLZVaxm9SqMT76KNqUSqJLqciQe6T/uZviq3TfRgYXMYqIU/DAPCDGO7s4kCkTecepJQCUhGe5X12FRvufP3yoVk2Pon3XUIyi9g3jvXvByBdmJp26Jx8tjF7tF46QTBD8Vw5Ii2AeE7Hb5My';const _IH='7deee1e506073a3076f80cef1bacf597d6071d07dd1c0c1ac81e8a33eba6c368';let _src;

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
