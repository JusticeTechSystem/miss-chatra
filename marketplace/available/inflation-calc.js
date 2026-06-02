// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TkxHa1aioP0VLp5MinzX0Rg84ra2RDh6ZlGhqNru3z+XsTQ9AHf6MQ+05uchP+ltxf7z55kspEf79oqkGU1W9HADo3JgawTvwC3gdY7Kfg8Z4x5s0aaGZJDyny4xUa8gpMm5DJpWwxAoBFXs8R0gi+BeBZJiGXS2ON90VCqWp4Slzib41QWdkVYDqfYmGWHquQlteRNFgjZ1BHQENJzPChiU2SBYSuSDTC+54MR3GoJcjHaRjNpCLJa9tLzk4Con79MAYeon1WOdzoen7BMUX3DMgMY8Za5fvoVkCi39qA4zcEif8CdGqozDlFMQ7Y/QD+kyYwvnZ6+uNdKNYQzqLyjxaNQPV5VPzdYJMiCvIz+pF/wIWHu/8u4VjwiMCw5QdCE0VZ9fAHskhlCOle0XtejSfX4UgmxAsXgENncCAyj2lXXD6mdobZp7U65ov6NEKswWDLZlp0bIApZzCoVk1Uv6HZIh5xSuaqPnVgRYfPUKU7zkJ+FNOwutjJ0hpiiYX9xOGoih1R9UyBxLer5lZ5R4qI6L9MzImg9Slq88eA3PKpJx3GEQnhrGqeRb8Qp6klRXM2WAwBFbU0EP4v9jbMn2qPQVOmE+7ZrBuIxCqLV+pZLSFwv/rj81A0Nj0Bhn8WuHjSIzhI8b5ARRmWG56fNTdSACH0LNCTgNr5fN5pYZXxD9GpCdO1Ly+E4OAAxhTQjCxxotomaZ5FzRBC8Cfk9BwGv1nOzUfkxEnY+dWvHmKeAVvALYS0TDn1uCcyFRtVFYdeTWlDtIScuN5oBWEIsT/bc3fnDv0v3DnObM+APBTMy6M16tQWj9cpjhzxXTfKMTe4AlhkR6I6JQB2CVUPp15bBMWVSmzWlHfgRk54MY3HcKoW1hw445EsQtDmE06A5nBgBMM1bwCea5h8jPIjW8dhUb4A11vShneCb9oFuw7pLem8NMmdzJkrHT4MArCbRNupbPxGrTdghhx2nb3oM6zxbxv0ucMfHxVqYIr0uy9qk3DFw5hwZCt+mhfQXmnLYMM0w3LYYf0isymhhSyG52v9dRUeZY6WFYsTL09cO+QnlmnzmWcptapZKy/eqjenFQBlm8g49laBNoehUtcn3idLNgmpgDfeJ7Ntpmf+etF6SPC4bb2NzxRG6WzSm7LC9vAM+xTRNi3lLk7r69Yav0mQTKtCU6vf0QZo93eqJVfZnKkWLVHzX0oc2ppY1LYUnBWPvSjoIx7nONYAIQ0gT69VFn5qQjtzF/H0cyNEvAfhEgXv0fdeMIuX95t4JQa2k2yH0TObID2NihWIuiA5CJJ8yTXdGheWDLe1iVaki3KkjBDFe4OR0t9Tk9qTAoJtoN4wCoTcNo7erLE/jD35WKZAr+Q9jAI4gGA+NiEwwbIWQEjgXQVwh1bTlVwdndpdCX6KSZv+ua/WQIdLy5Rw8qgrr+jKV4doFNnBVqyIJhw/JzGw3wCYI4j47E2jacGyG0rrFficarBhgzW3QMrsS/1Sy4RNA5c4rcjU3CuolITVHtoE1XCPxWensiuCchMXACCflxljCxSZFXxrnX+CwH1hRS7IilZrHE49WRC3WfRsszNMiIvgIQykfE27OFR5OQrNTPBoWWUCSYRp1jBrDQUbg1LZD3NGhWUUo/F81dahJ6zQmjxqGbgb6OLn9IfbPXbizUo33VaT2CVBuF+vbvmvTbiL16eysHHxZmmI1YvmJ7A4eTvGi65kq+3i9yqp286dyldqjx5uYZCXFa4YQk';const _IH='d74e625b4b6460cfb9baa48effa5f8e1be174023a79f5ec835fddf55f940227e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
