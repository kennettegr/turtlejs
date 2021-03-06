/* Copyright (c) 2014 Jorge Alberto Gómez López <gomezlopez.jorge96@gmail.com>
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>.*/

var repeat_block = function(params){
    if (params[2].has_all_slots()){
        var values = params[2].get_slot_values();
        if (params[2].stack_slots[0] != null){
            for (var i=0; i<values[0]; i++){
                params[2].stack_slots[0].chain_exec();
            }
        }
    }else{
        alert('Missing value from repeat block');
    }
}
