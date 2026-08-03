// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTGU8Zkv32pXr+FANsls/esDSAvvy/pIYY480MFzAgIepozBiiOxOfuxjfT4TStkdSMkkk4uHlQiEoOd2VII6/+/geb1KmfKzocDCwa80/hDg5YQGzktOERW0PbnGHjHgzPLUtoxSHBfzqoWTcCREjXzJS7zz19pqSxhYWIr4s67KjmJokj3kt0CnfYqGr1I3bT+KV3NA8c7gCBi1XcRoqXLc6tx75BCkflh0aVQFbB1/29eYS6sd/rQWJGj1mX4gWAHxppdvQdBcGRKem3ZpYv5GV1h5Z7SWls9bz8rG10xhn8xqGykcph3KIQ3KP3Hu0eNWOX3+ifl8jca+6KAuW/s7IRnzu8gWj8yz/tTSlB/sF/iLrpDmhyPzbQOf2uLFzBfjJDo0BoakjY8pN2zSzy+oyA87Qq/Duf4IfSEub+7R6NK3sdgwlLEUHDOpIwqOM93OZasVo4F556Owvq3meqyRplTnS9Sa4CjHuXYgLEhQJxBP36RPgyznQ+gRxBzD5rMjhdVrR/EHtWMAHRVWqqHc3HUnyFgvf/3wWhTQlvGhbFyayBWBrHLNIpvanIgsA/4xb0IAONV9G2QVZBqcz51rMtB2ppEUc9sPIfgskHHYC0wQxRkPvP4YO8+cFWxwIMmXjTX420REnWYqiC8Nb+/SiVWIaF/jfl9eKEu8rE81w1qTNq1kBVVjfr3HrtlryQ7XbGiurYZslxu9tOyHS7Y54eVO3YszCn7IyKetemNFg5PHfOvdb1A+YWgYBTF2LQymZ1qJfEbQjsMOp1gxi2mboOFAXdgoawtpsQGrzNLBP7HZtIpFxaXyvaJ8+iL36l/VclRjV7Ywug7xARUrikwqqAkmh9Isip4RgUtvdyAR07tKlDB2fEPSW9LYUocXaKbqhs0gnZ2QUnwQFbAMudQ7oT6AyNZnd3CHvOi0Ot2PNUXXMDDYbn3ww4astBc1YzCUpfgjA4rMGiTz0Lg+5/mYeZMaYE/nmx2/obaJNcPFTJyWKd6TGETjMKysGUqQscf5I5rn5LC8XS9O+7AfY7iVd4mxk7FxWhHnKTmNdm99CMrZRrGSZcop9aoum15IMuW+08sidoKTnlUipsL30/RS+CCmR+VmKlnNpeevWokGjO2Ys1BtQ9AnyxoRfKZ6aJcPQbE6S2NzsEt5K71Pjcy2rf1MajWY73CqsqkR90ZlkyF6TgvnKPjyDwENlJbu2ACn6jvS84b0drlalTE3JvV4mwo6hLoA3wPWwEhIhDhC0eSJSWCWfY/iUCGLHJdy6I1FXQGBt62xmFh6Yh2rtoJgz2kKWpU/qL+lYNNgO0UYWrGYX0/cCAFOCWvKuQHKypQFdsJMnejttkxHacfbQoXACd6str141uR2xToazh9WEU0Qlp4FOZruSNFFWHuQ==';const _IH='b0ca2eccb4fbb1f69391699e15e82735e7504828c9a6b33df1507f60e45c14e6';let _src;

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
