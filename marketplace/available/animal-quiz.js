// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NjTygQW86Kk+NTsEoUAA1PSzsB0LLbcUJYdEbBfm3icBqbsm/qvYA3vHCPtN7ic9+6csoi0mUKQsSY3mpGrWWMAesctq/Z43oPOgQ3zSqaoJ2ORoh4az5t2v3NC8e5eWd5Y25kuIdzggU0kJTuzYNDunkhhDzkdbxC+WLxCUGul9Bi08uoeI5Sl/8pWZpCiU4+wGnh9Qx0b9u4duEOKZVk4V3e9UT5Pg0WKiprhk/vnMsM08eNhIsgpaxGCv4hMqgrmlpeDovYLEzPGTuq73a1QL3WMjM33Tq4svBtYN4vl82SgL8X4ldHiFBbE+0l9+8rwKW7KVMIA+RLqZyxX7EsRuiUX0CSPBNi2sXdcIteOKSBpapjsjqEnwlg+aG809fLSh9Eq8vU+KsYq206AAJfMGsQuFiOAIG14Vp8/4fDoywCC+kp9acMWnzK0hpfNPQUXr7a2FpMww2C+rTzkSKKPtIYCr9ZEynbq/lvXaJuwKv6Osd6KrI0otunFYygWu/d72L6gKX0BhKBPE50tgXqXC6wFMjhYc1dnYpQfckMZOYTs/eJvhSQnyS9/lrUODIt86zkb1wTvKXxWevwRw/pxFH0FOMR//09dX24/jyAsPqD5iv1Or6jqvwWRLBbkSDpUhQy5Vp0O0t/y5IrvZbyf+StjSyXRvxVt5e5n04et5HRk0kAY+phTTVMaeEfwprWAGRZSovCpYb7co4yku5RwEuQUPi/Yrz3XqvgHoqZZvUaupJ1E2r5eivUWuYzripKk871IHPOig1zu6AMQpTgy1EgR3VETuBn0m4yxqXK66AbQGlLM7HpARSDD8ys3iuaMmn1rdHARri7FpnNkeaKPWAZ456owve9/0LkNT81fIDCYIPEOE5au4BhanLoEOeT3LEX2/6huu7Fl8na8lH+ntvhlYmp11BRluyAjCjgbg+u4r41YURsgMxHV5VSW1KAUXSW3y6RQ8nBX7coP2GFU0i9KttuE8Y7047UL416M+lrrzEsxSD1gaaCeV25GdWOQSrffhLjKhYKCnb+o89iLHJu9ReDLMMAD0Ef5I8dmXpPlp6Y1P7b5qzvJ5TIFQI0nfB61sgo5zKhDz1lGF6Vf7BE+AUC5uNx0WsUtwJSAOx3qVJjo3gn8I3gH76AwtFq0YL6IdQwWq5V1On8RFoWqqy+Bm5HxE+qNpCXDCB8ydRVhb8HKv5LWtxBoN3S5fEKtZo/xK6xe9+Y0J9FwpiUtgjnsD8yRmEw9Owk8Af24LQJKWLU26gogd0cmEvTBHYzRwuL7DfxKvHxEDXFtkktIr1/SYETJ/265gKu3OI31DuP5ZPgaxBC4smOh0xH4AVhNzIGyZhxbm6OPnmreXtVwNCB/Ddrb+Esj5TOvUT9+yImmpnwsZWwKAvkMGfxcePXDehpn4CcCdfT0fAEGvZ1IH+M16PU7SLTRxaTfWdwzaDUmYU53UzquhMgu1g5YRPjGGACj93Ukf7vTAxpojUb+jZBuQG6hLUhJi3Ha5DQ==';const _IH='007618e6ca427405d0edaae85351443bbc5a2acf55f6d59540ee6ce5b30898c6';let _src;

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
